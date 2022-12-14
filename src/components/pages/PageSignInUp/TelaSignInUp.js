import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import SignIn from "./SignIn";
import SignUp from "./SignUp";

function TelaSignInUp() {
    const currentRoute = useLocation().pathname;

    const timeWindowWelcome = 1000;

    const [welcome, setWelcome] = useState(true);

    // Evitar atualizar componente com ele desmontado
    useEffect(() => {
        let abortController = new AbortController();
        setInterval(() => {
            setWelcome(false);
        }, timeWindowWelcome);
        return () => {
            abortController.abort();
        };
    }, []);

    return (
        <Container>
            <ContainerWelcome show={welcome}>
                <Box>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 72 72"
                        fill="#FF008a"
                    >
                        <path d="M67.812,16.141c-2.348,1.039-4.869,1.743-7.519,2.06c2.703-1.62,4.778-4.187,5.756-7.244c-2.529,1.5-5.33,2.592-8.313,3.176C55.349,11.591,51.948,10,48.182,10c-7.229,0-13.092,5.861-13.092,13.093c0,1.026,0.118,2.021,0.338,2.981C24.543,25.526,14.9,20.317,8.441,12.395c-1.126,1.936-1.771,4.184-1.771,6.581c0,4.542,2.312,8.551,5.824,10.898c-2.146-0.069-4.165-0.657-5.93-1.638c-0.002,0.055-0.002,0.11-0.002,0.162c0,6.345,4.513,11.638,10.504,12.84c-1.101,0.298-2.256,0.457-3.449,0.457c-0.846,0-1.667-0.078-2.465-0.231c1.667,5.2,6.499,8.986,12.23,9.09C18.9,54.066,13.253,56.16,7.122,56.16c-1.055,0-2.096-0.061-3.122-0.184c5.794,3.717,12.676,5.882,20.067,5.882c24.083,0,37.251-19.949,37.251-37.249c0-0.566-0.014-1.134-0.039-1.694C63.838,21.068,66.058,18.765,67.812,16.141z" />
                        <animate
                            attributeName="fill"
                            values="#1a8edb;#FF008a"
                            dur="1s"
                            repeatCount="1"
                        />
                    </svg>
                </Box>
            </ContainerWelcome>
            <LeftSide>
                <LeftText>
                    <h1 style={{ cursor: "default" }}>linkr</h1>
                    <p>
                        save, share and discover
                        <br />
                        the best links on the web
                    </p>
                </LeftText>
            </LeftSide>
            <RightSide>
                {currentRoute === "/" ? <SignIn /> : <SignUp />}
            </RightSide>
        </Container>
    );
}

const Container = styled.main`
    background-color: var(--cor-preto);
    display: flex;
`;

const ContainerWelcome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--cor-preto);
    display: ${(props) => (props.show ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 5;
    position: absolute;
`;

const Box = styled.div`
    height: 128px;
    width: 128px;
    display: flex;
    justify-content: center;
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

export default TelaSignInUp;
