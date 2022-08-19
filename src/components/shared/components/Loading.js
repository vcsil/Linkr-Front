import { Bars } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
    return(
        <Container>
            <Bars
                height="80px"
                width="80px"
                color="white"
                ariaLabel="loading"
            />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;