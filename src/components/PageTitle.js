import styled from "styled-components";

export default function PageTitle({ children }) {
    return(
        <Title>
            { children }
        </Title>
    );
};

const Title = styled.h1`
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: var(--cor-branco);
    margin-bottom:44px;
`;