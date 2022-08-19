import React, { useContext } from "react";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../providers/Auth";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../App.js";
import Aviso from "../Aviso.js";

export default function Logout({ mostraAviso, setMostraAviso }) {
    const navigate = useNavigate();

    // const [mostra, setMostra] = useState(false);
    const { user, setUser } = useContext(AuthContext);

    function BoxAviso() {
        const mensagem = "Deseja sair?";
        setMostraAviso([
            ...mostraAviso,
            <Aviso
                key={0}
                mensagem={mensagem}
                nao={() => setMostraAviso([])}
                sim={() => Sair()}
            />,
        ]);
    }

    function BoxAvisoErr(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function Sair() {
        setMostraAviso([]);

        const URL = API_URL + "/log-off";
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promise = axios.delete(URL, config);
        promise.then((response) => {
            setUser({
                ...user,
                username: "",
                email: "",
                profile_img_url: "",
                token: "",
                entrou: false,
            });
            localStorage.removeItem("usuario");
            navigate("/");
        });
        promise.catch((err) => {
            const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
            BoxAvisoErr(mensagem);
        });
    }

    return (
        <>
            <Item onClick={BoxAviso}>Logout</Item>
        </>
    );
}

const Item = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 20px;
    letter-spacing: 0.05em;
    color: var(--cor-branco);

    cursor: pointer;
    /* padding: 9px 0 18px 0px; */
    margin-bottom: 10px;
    text-decoration: none;
    display: block;
`;
