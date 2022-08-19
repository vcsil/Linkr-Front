import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../providers/Auth.js";
import { API_URL } from "../App.js";
import { Container, BoxContent, InnerBox, BoxPosts } from "./PageHashtag.js"
import Aviso from "../Aviso.js";
import Trending from "../Trending";
import PageTitle from "../PageTitle.js";

export default function UserPosts() {
    const navigate = useNavigate();
    
    const { user } = useContext(AuthContext);

    const { userId } = useParams();
    const [userPosts, setUserPosts] = useState({});
    const [mostraAviso, setMostraAviso] = useState([]);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    };

    useEffect(() => {
        const URL = `${API_URL}/user/${userId}`;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        };

        axios
            .get(URL, config)
            .then(({ data }) => {
                setUserPosts(data);
            })
            .catch((err) => {
                const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
                BoxAviso(mensagem);
            })
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
                <PageTitle>{`users posts`}</PageTitle>
                <InnerBox>
                    <BoxPosts>

                    </BoxPosts>
                    <Trending />
                </InnerBox>
            </BoxContent>
        </Container>
    );
};