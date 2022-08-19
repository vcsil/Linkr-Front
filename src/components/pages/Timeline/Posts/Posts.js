import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { AuthContext } from "../../../../providers/Auth";
import Actions from "./Actions";
import Reactions from "./Reactions";
import Hashtag from "../../../Hashtag";

function PostUser({
    atualiza,
    setAtualiza,
    objetoPost,
    mostraAviso,
    setMostraAviso,
}) {
    const { authorInfo, text, objMeta, likesCount, postId } = objetoPost;

    const { user } = useContext(AuthContext);

    const donoDoPost = user.username === authorInfo.authorName;

    return (
        <ContainerPostUser>
            <ProfileImg src={authorInfo.authorImgUrl}></ProfileImg>
            <Link to={`/user/${authorInfo.id}`}>
                <NameUser>{authorInfo.authorName}</NameUser>
            </Link>
            <Actions
                displayBox={donoDoPost ? true : false}
                postId={postId}
                atualiza={atualiza}
                setAtualiza={setAtualiza}
                mostraAviso={mostraAviso}
                setMostraAviso={setMostraAviso}
            />
            <Reactions likesCount={likesCount} />
            <BoxPostUser>
                <p>
                    <Hashtag>{text}</Hashtag>
                </p>
                <a href={objMeta.url} target="_blank" rel="noreferrer">
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
                </a>
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
        cursor: pointer;
    }
`;

const MetaData = styled.div`
    width: 100%;
    height: 156px;
    border: 1px solid #4d4d4d;
    border-radius: 11px;

    display: flex;
    position: relative;

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
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;

    img {
        border-radius: 0px 12px 13px 0px;
        width: 154px;
        height: 100%;

        cursor: pointer;
    }
`;

export default PostUser;
