import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import React, { useContext } from "react";
import styled from "styled-components";

import { AuthContext } from "../../../../providers/Auth";

function PostUser() {
    const { user } = useContext(AuthContext);

    return (
        <ContainerPostUser>
            <ProfileImg src={user.profile_img_url}></ProfileImg>
            <NameUser>{user.username}</NameUser>
            <Actions>
                <FaPencilAlt
                    size="16px"
                    color="white"
                    cursor="pointer"
                    onMouseOver={({ target }) =>
                        (target.style.color = "lightgray")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                />
                <IoMdTrash
                    size="20px"
                    color="white"
                    cursor="pointer"
                    onMouseOver={({ target }) =>
                        (target.style.color = "lightgray")
                    }
                    onMouseOut={({ target }) => (target.style.color = "white")}
                />
            </Actions>
            <Reactions>
                <Like>
                    <AiOutlineHeart
                        size="20px"
                        color="white"
                        cursor="pointer"
                        onMouseOver={({ target }) =>
                            (target.style.color = "lightgray")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "white")
                        }
                    />
                    <span>14 likes</span>
                </Like>
                <Comments>
                    <AiOutlineComment
                        size="20px"
                        color="white"
                        cursor="pointer"
                        onMouseOver={({ target }) =>
                            (target.style.color = "lightgray")
                        }
                        onMouseOut={({ target }) =>
                            (target.style.color = "white")
                        }
                    />
                    <span>11 comments</span>
                </Comments>
            </Reactions>
            <BoxPostUser>
                <p>
                    Muito maneiro esse tutorial de Material UI com React, deem
                    uma olhada! <span>#react</span> <span>#material</span>
                </p>
            </BoxPostUser>
        </ContainerPostUser>
    );
}

const ContainerPostUser = styled.div`
    width: 612px;
    min-height: 276px;
    background-color: var(--cor-post);
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
    cursor: pointer;
`;

const NameUser = styled.p`
    margin-top: 6px;
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: var(--cor-branco);
    margin-bottom: 10px;
    cursor: pointer;
`;

const Actions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 12px;

    position: absolute;
    top: 22px;
    right: 22px;
`;

const Reactions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 15px;

    position: absolute;
    top: 86px;
    left: 12px;
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
    span {
        max-width: 65px;
    }
`;

const BoxPostUser = styled.div`
    p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 400;
        font-size: 17px;
        line-height: 20px;
        color: var(--cor-text);
        margin-bottom: 16px;
    }
    span {
        color: var(--cor-hashtag);
    }
`;

export default PostUser;
