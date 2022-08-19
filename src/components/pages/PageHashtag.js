import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { API_URL } from "../App.js";
import Aviso from "../Aviso.js";
import Trending from "../Trending";
import PageTitle from "../PageTitle.js";
import Posts from "./Timeline/Posts/Posts.js";
import Loading from "../shared/components/Loading.js";

export default function PageHashtag() {
    const navigate = useNavigate();

    const { hashtag } = useParams();

    const [carregando, setCarregando] = useState(false);
    const [hashtagPosts, setHashtagPosts] = useState([]);
    const [mostraAviso, setMostraAviso] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem("usuario")) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    useEffect(() => {
        setCarregando(true);

        const usuarioLogado = localStorage.getItem("usuario");
        const { token } = JSON.parse(usuarioLogado);

        const URL = `${API_URL}/hashtag/${hashtag}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        };

        axios
            .get(URL, config)
            .then(({ data }) => {
                setHashtagPosts(data);
                setCarregando(false);
            })
            .catch((err) => {
                const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
                BoxAviso(mensagem);
                setCarregando(false);
            });
    }, [hashtag]);

    const createHashtagPostsFeed = () => hashtagPosts?.map((obj) => <Posts key={obj.id} objetoPost={obj} />);
    const hashtagPostsFeed = carregando ? <Loading /> : createHashtagPostsFeed();


    return(
        <Container>
            <BoxContent>
                <PageTitle># {hashtag}</PageTitle>
                <InnerBox>
                    <BoxPosts>
                        {hashtagPostsFeed}
                    </BoxPosts>
                    <Trending />
                </InnerBox>
            </BoxContent>
        </Container>
    );
}

const Container = styled.main`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxContent = styled.div`
    max-width: fit-content;
`;

const InnerBox = styled.div`
    display: flex;
    justify-content: center;
    gap: 25px;
`;

const BoxPosts = styled.div`
    display: flex;
    flex-direction: column;
`;

export { Container, BoxContent, InnerBox, BoxPosts };