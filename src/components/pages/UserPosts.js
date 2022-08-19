import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { API_URL } from "../App.js";
import { Container, BoxContent, InnerBox, BoxPosts } from "./PageHashtag.js"
import Aviso from "../Aviso.js";
import Trending from "../Trending";
import PageTitle from "../PageTitle.js";
import Posts from "./Timeline/Posts/Posts.js";
import Loading from "../shared/components/Loading.js";

export default function UserPosts() {
    const navigate = useNavigate();
    
    const { userId } = useParams();

    const [carregando, setCarregando] = useState(false);
    const [userPosts, setUserPosts] = useState([]);
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
    };

    useEffect(() => {
        setCarregando(true);
        
        const usuarioLogado = localStorage.getItem("usuario");
        const { token } = JSON.parse(usuarioLogado);

        const URL = `${API_URL}/user/${userId}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .get(URL, config)
            .then(({ data }) => {
                setUserPosts(data);
                setCarregando(false);
            })
            .catch((err) => {
                const mensagem =
                typeof err.response.data === "undefined"
                    ? "Servidor desconectado"
                    : err.response.data;
                BoxAviso(mensagem);
                setCarregando(false);
            })
    }, [userId]);

    const username = userPosts[0]?.authorInfo.authorName;
    const title = carregando ? "user's posts" : `${username}'s posts`;
    const createUserPostsFeed = () => userPosts.map((obj) => <Posts key={obj.id} objetoPost={obj} />);
    const userPostsFeed = carregando ? <Loading /> : createUserPostsFeed();

    return(
        <Container>
            <BoxContent>
                <PageTitle>{title}</PageTitle>
                <InnerBox>
                    <BoxPosts>
                        {userPostsFeed}
                    </BoxPosts>
                    <Trending />
                </InnerBox>
            </BoxContent>
        </Container>
    );
};