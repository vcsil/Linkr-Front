import styled from "styled-components";
import ReactTooltip from 'react-tooltip';
import { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import axios from "axios";
import { API_URL } from "../../../App";
import Aviso from "../../../Aviso";

export default function Like({ likesCount, likedBy, postId }) {
    const [like, setLike] = useState(false);
    // const [totalLikes, setTotalLikes] = useState(likesCount);
    // const [usernamesLikes, setUsernamesLikes] = useState(likedBy);
    // const [loading, setLoading] = useState(false);
    // const [mostraAviso, setMostraAviso] = useState([]);


    // function BoxAviso(mensagem) {
    //     setMostraAviso([
    //         ...mostraAviso,
    //         <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
    //     ]);
    // }

    // const likePost = () => {
    //     setLoading(true);
    //     setLike(true);

    //     const usuarioLogado = localStorage.getItem("usuario");
    //     const { token } = JSON.parse(usuarioLogado);
        

    //     const URL = `${API_URL}/like/${postId}`;
    //     const config = {
    //         headers: {
    //             authorization: `Bearer ${token}`,
    //         }
    //     };

    //     axios
    //         .post(URL, {}, config)
    //         .then(() => {
    //             setTotalLikes(totalLikes + 1);
    //             setUsernamesLikes([{name: "Você"}, ...likedBy]);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             const mensagem =
    //             typeof err.response.data === "undefined"
    //                 ? "Servidor desconectado"
    //                 : err.response.data;
    //             BoxAviso(mensagem);
    //             setLoading(false);
    //         });
    // };

    // const removeLikePost = () => {
    //     setLoading(true);
    //     setLike(false);

    //     const usuarioLogado = localStorage.getItem("usuario");
    //     const { token } = JSON.parse(usuarioLogado);

    //     const URL = `${API_URL}/like/${postId}`;
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         }
    //     };

    //     axios
    //         .delete(URL, config)
    //         .then(() => {
    //             setTotalLikes(totalLikes - 1);
    //             setUsernamesLikes(...likedBy);
    //             setLoading(false);
    //         })
    //         .catch((err) => {
    //             const mensagem =
    //             typeof err.response.data === "undefined"
    //                 ? "Servidor desconectado"
    //                 : err.response.data;
    //             BoxAviso(mensagem);
    //             setLoading(false);
    //         });
    // };


    const iconHeartOutline =
        <AiOutlineHeart onClick={() => setLike(!like)}
            size="20px"
            color="white"
            cursor="pointer"
            onMouseOver={({ target }) => (target.style.color = "lightgray")}
            onMouseOut={({ target }) => (target.style.color = "white")}
        />;
    const iconHeartFilled =         
        <AiFillHeart onClick={() => setLike(!like)}
            size="20px"
            color="red"
            cursor="pointer"
            onMouseOver={({ target }) => (target.style.color = "#AC0000")}
            onMouseOut={({ target }) => (target.style.color = "red")}
        />;
    const iconLike = like ? iconHeartFilled : iconHeartOutline;
    // const createLikeInfo = () => {
    //     if(totalLikes > 3) {
    //         return `${usernamesLikes[0].name}, ${usernamesLikes[1].name} e outras ${totalLikes - 2} pessoas`;
    //     };
    //     if(totalLikes === 3) {
    //         return `${usernamesLikes[0].name}, ${usernamesLikes[1].name} e outra pessoa`;
    //     };
    //     if(totalLikes === 2) {
    //         return `${usernamesLikes[0].name} e ${usernamesLikes[1].name}`;
    //     };
    //     if(totalLikes === 1) {
    //         return `${usernamesLikes[0].name}`;
    //     };
    //     if(totalLikes === 0) {
    //         return "0 likes";
    //     };
    // };
    // const likeInfoToolTip = createLikeInfo();

    return(
        <LikeBox>
            {iconLike}
            <span>{likesCount} likes</span>
        </LikeBox>
    );
};

const LikeBox = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    span {
        max-width: 40px;
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        cursor: pointer;

        margin-top: 6px;
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 11px;
        line-height: 13px;
        text-align: center;
        color: var(--cor-branco);
    }
`;