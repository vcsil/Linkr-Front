import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import { AiOutlineHeart, AiOutlineComment } from "react-icons/ai";
import React, { useContext } from "react";
import styled from "styled-components";

import { AuthContext } from "../../../../providers/Auth";

const objMeta = {
    url: "https://www.youtube.com/watch?v=NSWSCfpkB6U",
    title: "CASAGRANDE - Podpah #461",
    image: "https://i.ytimg.com/vi/NSWSCfpkB6U/hqdefault.jpg",
    description:
        "TRYBEConstrua sua carreira em tecnologia na Trybe! Inscreva-se agora: https://www.betrybe.com/casagrande-no-podpah-------------------------------------------...",
};

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
                <MetaData>
                    <Resume>
                        <Title>{objMeta.title}</Title>
                        <Description>{objMeta.description}</Description>
                        <Url>{objMeta.url}</Url>
                    </Resume>
                    <ImageMetaData>
                        <img src={objMeta.image} alt={objMeta.title} />
                    </ImageMetaData>
                </MetaData>
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
    > p {
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

const MetaData = styled.div`
    width: 100%;
    height: 156px;
    border: 1px solid #4d4d4d;
    border-radius: 11px;

    display: flex;

    :hover {
        filter: brightness(1.3);
    }

    p:hover {
        cursor: pointer;
        filter: brightness(1.3);
    }
`;

const Resume = styled.div`
    padding: 24px 28px 24px 20px;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
    }
`;

const Title = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;

    max-width: 250px;
    height: 38px;
    margin-bottom: 5px;

    -webkit-line-clamp: 2;
`;

const Description = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9b9595;

    max-width: 304px;
    height: 38px;
    margin-bottom: 14px;

    -webkit-line-clamp: 3;
`;

const Url = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #cecece;

    max-width: 303px;
    height: 13px;
`;

const ImageMetaData = styled.div`
    img {
        border-radius: 0px 12px 13px 0px;
        width: 154px;
        height: 100%;

        cursor: pointer;
    }
`;

export default PostUser;
