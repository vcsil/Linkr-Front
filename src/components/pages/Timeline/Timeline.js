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
import Trending from "../../Trending";
import PageTitle from "../../PageTitle";

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
            <BoxContent>
                <PageTitle>timeline</PageTitle>
            <BoxTimeline>
              <BoxPosts>
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
              </BoxPosts>
              <Trending />
            </BoxTimeline>
            </BoxContent>
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

const BoxContent = styled.div`
    max-width: fit-content;
`;

const BoxTimeline = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
`;

const BoxPosts = styled.div`
    display: flex;
    flex-direction: column;
`;

const Centraliza = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Timeline;
