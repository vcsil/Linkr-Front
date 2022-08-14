import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import SignIn from "./SignIn";

function TelaSignInOut() {
    const currentRoute = useLocation().pathname;

    return (
        <Container>
            <LeftSide>
                <LeftText>
                    <h1>linkr</h1>
                    <p>
                        save, share and discover
                        <br />
                        the best links on the web
                    </p>
                </LeftText>
            </LeftSide>
            <RightSide>
                {currentRoute === "/" ? <SignIn /> : <h1>Ai papai</h1>}
            </RightSide>
        </Container>
    );
}

const Container = styled.body`
    background-color: var(--cor-preto);
    display: flex;
`;

const LeftSide = styled.div`
    width: 100%;
    padding-top: 14%;
    padding-left: 144px;
    padding-right: 50px;
`;

const LeftText = styled.div`
    h1 {
        font-family: "Passion One";
        font-style: normal;
        font-weight: 700;
        font-size: 106px;
        line-height: 117px;
        letter-spacing: 0.05em;
        color: var(--cor-branco);
    }

    p {
        font-family: "Oswald";
        font-style: normal;
        font-weight: 700;
        font-size: 43px;
        line-height: 64px;
        color: var(--cor-branco);
    }
`;

const RightSide = styled.div`
    min-width: 37vw;
    background-color: var(--cor-fundo-tela);
`;

export default TelaSignInOut;
