import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import React, { useContext } from "react";
import styled from "styled-components";
import Modal from "react-modal";

import { API_URL } from "../../../App";
import { AuthContext } from "../../../../providers/Auth";
import axios from "axios";
import Aviso from "../../../Aviso";

const customStyles = {
    overlay: {
        zIndex: "3",
    },
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        background: "#333333",
        borderRadius: "50px",
        width: "598px",
        padding: "38px 0 68px 0",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        position: "absolute",
        alignItems: "center",
    },
};

function Actions({
    atualiza,
    setAtualiza,
    displayBox,
    postId,
    mostraAviso,
    setMostraAviso,
}) {
    const { user } = useContext(AuthContext);

    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function BoxAvisoErr(mensagem) {
        setMostraAviso([
            ...mostraAviso,
            <Aviso key={0} mensagem={mensagem} ok={() => setMostraAviso([])} />,
        ]);
    }

    function deletePost() {
        const URL = API_URL + `/post/${postId}`;
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`,
            },
        };

        const promise = axios.delete(URL, config);
        promise.then((response) => {
            setAtualiza(!atualiza);
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
        <BoxActions displayBox={displayBox}>
            <FaPencilAlt
                size="16px"
                color="white"
                cursor="pointer"
                onMouseOver={({ target }) => (target.style.color = "lightgray")}
                onMouseOut={({ target }) => (target.style.color = "white")}
            />
            <IoMdTrash
                onClick={openModal}
                size="20px"
                color="white"
                cursor="pointer"
                onMouseOver={({ target }) => (target.style.color = "lightgray")}
                onMouseOut={({ target }) => (target.style.color = "white")}
            />
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                ariaHideApp={false}
                contentLabel="Example Modal"
            >
                <Texto>
                    Are you sure you want
                    <br />
                    to delete this post?
                </Texto>
                <Botoes>
                    <button
                        onClick={closeModal}
                        style={{
                            background: "var(--cor-branco)",
                            color: "#1877F2",
                        }}
                    >
                        No, go back
                    </button>
                    <button
                        onClick={deletePost}
                        style={{
                            background: "#1877F2",
                            color: "var(--cor-branco)",
                        }}
                    >
                        Yes, delete it
                    </button>
                </Botoes>
            </Modal>
        </BoxActions>
    );
}

const BoxActions = styled.div`
    display: ${(props) => (props.displayBox ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    column-gap: 12px;

    position: absolute;
    top: 22px;
    right: 22px;
`;

const Texto = styled.div`
    position: relative;
    font-family: "Lato";
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 41px;
    text-align: center;
    color: #ffffff;
    margin-bottom: 48px;
`;

const Botoes = styled.div`
    width: 296px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 28px;

    > button {
        width: 134px;
        height: 38px;

        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
    }
`;

export default Actions;
