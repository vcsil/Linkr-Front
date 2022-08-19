import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";

import { AuthContext } from "../../../providers/Auth";
import { API_URL } from "../../App";
import Aviso from "../../Aviso";

function PostUser({ atualiza, setAtualiza, postCarregando }) {
    const { user } = useContext(AuthContext);

    const [url, setUrl] = useState("");
    const [text, setText] = useState("");
    const [mostraAviso, setMostraAviso] = useState([]);
    const [carregando, setCarregando] = useState(false);

    function BoxAviso(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function SubmitData(event) {
        event.preventDefault();
        setCarregando(true);

        const URL = API_URL + "/post";

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };
        const body = {
            text,
            url,
        };

        const promise = axios.post(URL, body, config);
        promise.then((response) => {
            // Atualizar posts
            setCarregando(false);
            setText("");
            setUrl("");
            setAtualiza(!atualiza);
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
    return (
        <ContainerPostUser>
            <ProfileImg src={user.profile_img_url}></ProfileImg>
            <TitlePost>What are you going to share today?</TitlePost>
            <PostForm onSubmit={SubmitData}>
                <PostInputUrl
                    placeholder="http://..."
                    type="url"
                    id="url"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    disabled={carregando}
                    required
                />
                <PostInputText
                    placeholder="Awesome article about #javascript"
                    type="text"
                    id="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    disabled={carregando}
                />
                <Botao type="submit" disabled={carregando || postCarregando}>
                    {carregando ? <p>Publishing...</p> : <p>Publish</p>}
                </Botao>
            </PostForm>
        </ContainerPostUser>
    );
}

const ContainerPostUser = styled.div`
    width: 612px;
    height: 210px;
    background-color: var(--cor-branco);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    padding: 16px 22px 16px 86px;
    position: relative;
    margin-bottom: 30px;
`;

const ProfileImg = styled.img`
    position: absolute;
    height: 50px;
    width: 50px;
    border-radius: 100%;
    top: 16px;
    left: 18px;
`;

const TitlePost = styled.p`
    margin-top: 6px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
    margin-bottom: 10px;
`;

const PostForm = styled.form`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const PostInputUrl = styled.input`
    background: var(--cor-placeholder);
    width: 100%;
    max-width: 503px;
    height: 30px;
    padding: 0 14px;
    margin-bottom: 6px;
    border: 0;
    border-radius: 6px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: black;

    ::placeholder {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }
`;

const PostInputText = styled.textarea`
    background: var(--cor-placeholder);
    width: 100%;
    max-width: 503px;
    height: 66px;
    resize: none;
    padding: 8px 14px;
    margin-bottom: 6px;
    border: 0;
    border-radius: 6px;

    font-family: "Lato";
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: black;

    ::placeholder {
        font-family: "Lato";
        font-style: normal;
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        color: #949494;
    }
`;

const Botao = styled.button`
    width: 112px;
    height: 30px;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    right: 22px;
    bottom: -5px;

    > p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: var(--cor-branco);
    }
`;

export default PostUser;
