/* eslint-disable no-unused-expressions */
import React, { useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import { API_URL } from "../../App";
import Aviso from "../../Aviso";

function SignUp() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [profile_img_url, setProfile_img_url] = useState("");
    const [carregando, setCarregando] = useState(false);
    const [mostraAviso, setMostraAviso] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function limitLength(text) {
        if (text.length > 40) {
            return "red";
        }
        return "black";
    }

    function SubmitData(event) {
        if (!carregando) {
            event.preventDefault();

            const username40 = username.length > 40;
            const password40 = password.length > 40;

            if (username40 || password40) {
                return BoxAviso(
                    "Username and Password: Maximum length is 40 characters"
                );
            }

            setCarregando(true);

            const URL = API_URL + "/sign-up";

            const promise = axios.post(URL, {
                email,
                password,
                username,
                profile_img_url,
            });
            promise.then((response) => {
                setCarregando(false);
                BoxAviso(response.data);
                navigate("/");
            });
            promise.catch((err) => {
                navigate("/sign-up");
                setCarregando(false);
                const mensagem =
                    typeof err.response.data === "undefined"
                        ? "Servidor desconectado"
                        : err.response.data;
                BoxAviso(mensagem);
            });
        }
    }

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
                <LimitLength
                    // eslint-disable-next-line react/jsx-no-bind
                    cor={limitLength(password)}
                    placeholder="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={carregando}
                    required
                />
                <LimitLength
                    // eslint-disable-next-line react/jsx-no-bind
                    cor={limitLength(username)}
                    placeholder="username"
                    type="username"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={carregando}
                    required
                />
                <input
                    placeholder="picture url"
                    type="url"
                    id="url"
                    value={profile_img_url}
                    onChange={(e) => setProfile_img_url(e.target.value)}
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
                        <p>Sign Up</p>
                    )}
                </Botao>
            </form>
            <Link
                to={carregando ? "#" : "/"}
                style={{ textDecoration: "none" }}
            >
                <FirstTime>Switch back to log in</FirstTime>
            </Link>
            {mostraAviso.map((i) => i)}
        </Container>
    );
}

const Container = styled.div`
    margin: 24% 54px 0 52px;
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

const LimitLength = styled.input`
    color: ${(props) => props.cor};
`;

export default SignUp;
