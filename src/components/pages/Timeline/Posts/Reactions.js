import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import React from "react";
import styled from "styled-components";

function Reactions({ likesCount }) {
    return (
        <BoxReactions>
            <Like>
                <AiOutlineHeart
                    size="20px"
                    color="white"
                    cursor="pointer"
                    onMouseOver={({ target }) =>
                        (target.style.color = "lightgray")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                />
                <span>{likesCount} likes</span>
            </Like>
            <Comments>
                <AiOutlineComment
                    size="20px"
                    color="white"
                    cursor="pointer"
                    onMouseOver={({ target }) =>
                        (target.style.color = "lightgray")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                />
                <span>11 comments</span>
            </Comments>
        </BoxReactions>
    );
}

const BoxReactions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;

    position: absolute;
    top: 86px;
    left: 25px;
`;

const Like = styled.div`
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

const Comments = styled(Like)`
    display: none;

    span {
        max-width: 65px;
    }
`;

export default Reactions;
