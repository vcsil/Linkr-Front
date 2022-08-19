import { FaPencilAlt } from "react-icons/fa";
import { IoMdTrash } from "react-icons/io";
import React from "react";
import styled from "styled-components";

function Actions({ displayBox }) {
    return (
        <BoxActions displayBox={displayBox}>
            <FaPencilAlt
                size="16px"
                color="white"
                cursor="pointer"
                onMouseOver={({ target }) => (target.style.color = "lightgray")}
                onMouseOut={({ target }) => (target.style.color = "white")}
            />
            <IoMdTrash
                size="20px"
                color="white"
                cursor="pointer"
                onMouseOver={({ target }) => (target.style.color = "lightgray")}
                onMouseOut={({ target }) => (target.style.color = "white")}
            />
        </BoxActions>
    );
}

const BoxActions = styled.div`
    display: ${(props) => (props.displayBox ? "flex" : "none")};
    justify-content: center;
    align-items: center;
    column-gap: 12px;

    position: absolute;
    top: 22px;
    right: 22px;
`;

export default Actions;
