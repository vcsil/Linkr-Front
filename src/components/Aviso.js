/* eslint-disable react/prop-types */
import styled from "styled-components";
import React from "react";

function Aviso({ mensagem, sim, nao, ok }) {
    return (
        <ContainerAviso>
            <BoxAviso>
                <h2>{mensagem}</h2>
                {ok ? (
                    <Botao>
                        <button
                            type="button"
                            onClick={ok}
                            style={{ backgroundColor: "var(--cor-fundo-tela)" }}
                        >
                            Ok
                        </button>
                    </Botao>
                ) : (
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
                )}
            </BoxAviso>
        </ContainerAviso>
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

    h2 {
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
