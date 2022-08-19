/* eslint-disable react/prop-types */
import styled from "styled-components";
import React from "react";

import { AuthContext } from "../providers/Auth.js";

function UmBotao({ ok }) {
    return (
        <Botao>
            <button
                type="button"
                onClick={ok}
                style={{
                    backgroundColor: "var(--cor-fundo-tela)",
                }}
            >
                Ok
            </button>
        </Botao>
    );
}

function DoisBotoes({ nao, sim }) {
    return (
        <Botoes>
            <button
                type="button"
                onClick={nao}
                style={{ backgroundColor: "red" }}
            >
                Não
            </button>
            <button
                type="button"
                onClick={sim}
                style={{ backgroundColor: "green" }}
            >
                Sim
            </button>
        </Botoes>
    );
}

function Aviso({ mensagem, sim, nao, ok }) {
    const { user } = React.useContext(AuthContext);

    const name = user?.username;

    const montarBotoes = () =>
        ok ? <UmBotao ok={ok} /> : <DoisBotoes sim={sim} nao={nao} />;
    const bottoes = montarBotoes();

    return (
        <>
            <ContainerAviso>
                <BoxAviso>
                    <h2>
                        {name}
                        <br />
                        {mensagem}
                    </h2>
                    {bottoes}
                </BoxAviso>
            </ContainerAviso>
        </>
    );
}

const ContainerAviso = styled.div`
    position: fixed;
    z-index: 10;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255, 255, 255, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const BoxAviso = styled.div`
    width: 350px;
    height: 300px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 30px 36px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    -webkit-animation: scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    animation: scale-in 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);

    h2 {
        font-family: "Lato";
        font-style: normal;
        font-size: 24px;
        text-align: center;
        line-height: 28px;
    }
`;

const Botoes = styled.div`
    display: flex;
    justify-content: space-between;
    column-gap: 20px;

    button {
        width: 100px;
        height: 40px;
        color: var(--cor-branco);
        font-weight: 400;
        font-size: 18px;
    }
`;

const Botao = styled.div`
    display: flex;
    justify-content: center;

    button {
        width: 200px;
        height: 40px;
        color: var(--cor-branco);
        font-weight: 400;
        font-size: 18px;
    }
`;

export default Aviso;
