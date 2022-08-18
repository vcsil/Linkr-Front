import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../providers/Auth.js";
import { API_URL } from "../App.js";
import Aviso from "../Aviso.js";
import Trending from "../Trending";
import PageTitle from "../PageTitle.js";

export default function PageHashtag() {
    const navigate = useNavigate();

    const { user } = useContext(AuthContext);

    const { hashtag } = useParams();
    const [hashtagPosts, setHashtagPosts] = useState([]);
    const [mostraAviso, setMostraAviso] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    useEffect(() => {
        const URL = `${API_URL}/hashtag/${hashtag}`;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            }
        };

        axios
            .get(URL, config)
            .then(({ data }) => {
                setHashtagPosts(data);
                console.log(data)
            })
            .catch((err) => {
                const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
                BoxAviso(mensagem);
            });
    }, []);

    useEffect(() => {
        if (!localStorage.getItem("usuario")) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <Container>
            <BoxContent>
                <PageTitle># {hashtag}</PageTitle>
                <InnerBox>
                    <BoxPosts>

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
