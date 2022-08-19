import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bars } from "react-loader-spinner";
import styled from "styled-components";
import axios from "axios";

import { AuthContext } from "../../../providers/Auth";
import NewPosts from "./Posts/NewPosts";
import { API_URL } from "../../App";
import Posts from "./Posts/Posts";
import PostUser from "./PostUser";
import Aviso from "../../Aviso";

function Timeline() {
    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);

    const [carregando, setCarregando] = useState(false);
    const [mostraAviso, setMostraAviso] = useState([]);
    const [getPosts, setGetPosts] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function carregaPost({ token }) {
        setCarregando(true);

        const URL = API_URL + "/timeline";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const promise = axios.get(URL, config);
        promise.then((response) => {
            setGetPosts(response.data);
            setCarregando(false);
        });
        promise.catch((err) => {
            const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
            BoxAviso(mensagem);
        });
    }

    useEffect(() => {
        // Verifica se já existe pessoa logada
        const usuarioLogado = localStorage.getItem("usuario");
        if (usuarioLogado) {
            const objetoUsuario = JSON.parse(usuarioLogado);
            carregaPost(objetoUsuario);
            return;
        }
        navigate("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ContainerTimeline>
            <BoxTimeline>
                <TitleTimeline>timeline</TitleTimeline>
                <PostUser />
                <NewPosts mostra={false} />
                {carregando ? (
                    <Centraliza>
                        <Bars
                            height="80px"
                            width="80px"
                            color="white"
                            ariaLabel="loading"
                        />
                    </Centraliza>
                ) : (
                    getPosts?.map((obj) => (
                        <Posts key={obj.postId} objetoPost={obj} />
                    ))
                )}
            </BoxTimeline>
            {mostraAviso.map((i) => i)}
        </ContainerTimeline>
    );
}

const ContainerTimeline = styled.main`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxTimeline = styled.div``;

const TitleTimeline = styled.div`
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: var(--cor-branco);
    margin-bottom: 44px;
`;

const Centraliza = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Timeline;
