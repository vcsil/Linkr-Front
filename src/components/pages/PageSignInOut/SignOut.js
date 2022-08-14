import React, { useState } from "react";
import { Bars } from "react-loader-spinner";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SignOut() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [pictureUrl, setpictureUrl] = useState("");
    const [carregando, setCarregando] = useState(false);

    function SubmitData(event) {
        event.preventDefault();
        setCarregando(true);

        console.log("oi");
    }

    return (
        <Container>
            <form className="boxInputs" onSubmit={SubmitData}>
                <input
                    placeholder="e-mail"
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={carregando}
                    required
                />
                <input
                    placeholder="password"
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={carregando}
                    required
                />
                <input
                    placeholder="username"
                    type="name"
                    id="name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    disabled={carregando}
                    required
                />
                <input
                    placeholder="picture url"
                    type="url"
                    id="url"
                    value={pictureUrl}
                    onChange={(e) => setpictureUrl(e.target.value)}
                    disabled={carregando}
                    required
                />
                <Botao type="submit" disabled={carregando}>
                    {carregando ? (
                        <Bars
                            height="40"
                            width="40"
                            color="white"
                            ariaLabel="loading"
                        />
                    ) : (
                        <p>Sign Up</p>
                    )}
                </Botao>
            </form>
            <Link
                to={carregando ? "#" : "/"}
                style={{ textDecoration: "none" }}
            >
                <FirstTime>Switch back to log in</FirstTime>
            </Link>
            {/* {mostraAviso.map((i) => i)} */}
        </Container>
    );
}

const Container = styled.div`
    margin: 24% 54px 0 52px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Botao = styled.button`
    width: 100%;
    max-width: 430px;
    height: 65px;
    margin-bottom: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FirstTime = styled.p`
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    text-decoration-line: underline;
    color: var(--cor-branco);
`;

export default SignOut;
