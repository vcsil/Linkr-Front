import { Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import Aviso from "../../Aviso";
import { API_URL } from "../../App";
import { AuthContext } from "../../../providers/Auth";

function SignIn() {
    const { user, setUser } = React.useContext(AuthContext);

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [mostraAviso, setMostraAviso] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function entraLogo() {
        setCarregando(false);
        navigate("/timeline");
    }

    function entrando(props) {
        setUser({
            ...user,
            username: props.username,
            email: props.email,
            profile_img_url: props.profile_img_url,
            token: props.token,
            entrou: true,
        });

        const dadosSerializados = JSON.stringify({
            username: props.username,
            email: props.email,
            profile_img_url: props.profile_img_url,
            token: props.token,
            entrou: true,
        });
        localStorage.setItem("usuario", dadosSerializados);
        setCarregando(false);

        navigate("/timeline");
    }

    function SubmitData(event) {
        event.preventDefault();
        setCarregando(true);

        const password40 = password.length > 40;

        if (password40) {
            return BoxAviso("Password: Maximum length is 40 characters");
        }

        const URL = API_URL + "/sign-in";
        const promise = axios.post(URL, {
            email,
            password,
        });
        promise.then((response) => {
            entrando(response.data);
        });
        promise.catch((err) => {
            const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
            BoxAviso(mensagem);
            setCarregando(false);
        });
    }

    useEffect(() => {
        if (localStorage.getItem("usuario")) {
            entraLogo();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Container>
            <form className="boxInputs" onSubmit={SubmitData}>
                <input
                    placeholder="e-mail"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={carregando}
                    required
                />
                <input
                    placeholder="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={carregando}
                    required
                />
                <Botao type="submit" disabled={carregando}>
                    {carregando ? (
                        <Bars
                            height="40"
                            width="40"
                            color="white"
                            ariaLabel="loading"
                        />
                    ) : (
                        <p>Log In</p>
                    )}
                </Botao>
            </form>
            <Link
                to={carregando ? "#" : "/sign-up"}
                style={{ textDecoration: "none" }}
            >
                <FirstTime>First time? Create an account!</FirstTime>
            </Link>
            {mostraAviso.map((i) => i)}
        </Container>
    );
}

const Container = styled.div`
    margin: 40% 54px 0 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Botao = styled.button`
    width: 100%;
    max-width: 430px;
    height: 65px;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FirstTime = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: var(--cor-branco);
`;

export default SignIn;
