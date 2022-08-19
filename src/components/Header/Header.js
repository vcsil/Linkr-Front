/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import styled from "styled-components";

import MenuHeader from "./menuHeader.js";

export default function Header({ entrou }) {
    function reiniciaPag() {
        window.location.reload();
    }

    return (
        <Container entrou={entrou}>
            <Head>
                <Icon
                    style={{ cursor: "pointer" }}
                    onClick={() => reiniciaPag()}
                    onKeyDown={() => reiniciaPag()}
                >
                    linkr
                </Icon>
                <MenuHeader entrou={entrou} />
            </Head>
        </Container>
    );
}

const Container = styled.header`
    display: ${(props) => (props.entrou ? "initial" : "var(--display-none)")};
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;

    background-color: var(--cor-preto);
`;

const Head = styled.div`
    width: 100%;
    height: 72px;

    background-color: var(--cor-preto);

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 28px;
    padding-right: 8px;
`;

const Icon = styled.p`
    font-family: "Passion One";
    font-style: normal;
    font-weight: 700;
    font-size: 49px;
    line-height: 54px;
    letter-spacing: 0.05em;
    color: var(--cor-branco);
`;
