import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import NewPosts from "./Posts/NewPosts";
import Posts from "./Posts/Posts";

import PostUser from "./PostUser";

function Timeline() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("usuario")) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ContainerTimeline>
            <BoxTimeline>
                <TitleTimeline>timeline</TitleTimeline>
                <PostUser />
                <NewPosts mostra={false} />
                <Posts />
            </BoxTimeline>
        </ContainerTimeline>
    );
}

const ContainerTimeline = styled.main`
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxTimeline = styled.div``;

const TitleTimeline = styled.div`
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: var(--cor-branco);
    margin-bottom: 44px;
`;

export default Timeline;
