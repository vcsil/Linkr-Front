import { FiRefreshCw } from "react-icons/fi";
import styled from "styled-components";
import React from "react";

function NewPosts({ mostra }) {
    return (
        <ContainerNewPosts mostra={mostra}>
            <Texts>
                <p>12 new posts, load more!</p>
                <FiRefreshCw size="16px" color="white" cursor="pointer" />
            </Texts>
        </ContainerNewPosts>
    );
}

const ContainerNewPosts = styled.div`
    width: 612px;
    height: 62px;
    background: var(--cor-button);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: ${(props) => (props.mostra ? "flex" : "none")};
    justify-content: center;
    align-items: center;

    :hover {
        filter: brightness(1.3);
        cursor: pointer;
    }
`;

const Texts = styled.span`
    display: flex;

    p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        word-spacing: 2px;
        color: #ffffff;
        margin-right: 14px;
    }
`;

export default NewPosts;
