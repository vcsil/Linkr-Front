import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import NewPosts from "./Posts/NewPosts";
import { API_URL } from "../../App";
import Posts from "./Posts/Posts";
import PostUser from "./PostUser";
import Aviso from "../../Aviso";
import Trending from "../../Trending";
import PageTitle from "../../PageTitle";
import Loading from "../../shared/components/Loading";

function Timeline() {
    const navigate = useNavigate();

    const [carregando, setCarregando] = useState(false);
    const [mostraAviso, setMostraAviso] = useState([]);
    const [getPosts, setGetPosts] = useState([]);
    const [atualiza, setAtualiza] = useState(false);

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
            if (response.data.length > 0) {
                setGetPosts(response.data);
                setCarregando(false);
                return;
            }
            BoxAviso("There are no posts yet");
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
    }, [atualiza]);

    return (
        <ContainerTimeline>
            <BoxContent>
                <PageTitle>timeline</PageTitle>
                <BoxTimeline>
                    <BoxPosts>
                        <PostUser
                            atualiza={atualiza}
                            setAtualiza={setAtualiza}
                            postCarregando={carregando}
                        />
                        <NewPosts mostra={false} />
                        {carregando ? (
                            <Loading />
                        ) : (
                            getPosts?.map((obj) => (
                                <Posts
                                    key={obj.postId}
                                    objetoPost={obj}
                                    atualiza={atualiza}
                                    setAtualiza={setAtualiza}
                                    mostraAviso={mostraAviso}
                                    setMostraAviso={setMostraAviso}
                                />
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

export default Timeline;
