import React, { useContext, useEffect, useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

import { AuthContext } from "../../providers/Auth";
import Logout from "./Logout";

export default function MenuHeader({ entrou }) {
    const { user } = useContext(AuthContext);

    const [mostraAviso, setMostraAviso] = useState([]);
    const [openMenu, setOpenMenu] = useState(false);

    useEffect(() => {
        setOpenMenu(false);
    }, [entrou]);

    return (
        <>
            <MenuContainer>
                <Chevron onClick={() => setOpenMenu(!openMenu)}>
                    {openMenu ? (
                        <BsChevronUp
                            size="20px"
                            color="white"
                            cursor="pointer"
                        />
                    ) : (
                        <BsChevronDown
                            size="20px"
                            color="white"
                            cursor="pointer"
                        />
                    )}
                    <img src={user.profile_img_url} alt="Profile" />
                </Chevron>
                <DropDownOverlay
                    openMenu={openMenu}
                    onClick={() => setOpenMenu(!openMenu)}
                >
                    <DropDown>
                        <Logout
                            mostraAviso={mostraAviso}
                            setMostraAviso={setMostraAviso}
                        />
                    </DropDown>
                </DropDownOverlay>
                {mostraAviso.map((i) => i)}
            </MenuContainer>
        </>
    );
}

const MenuContainer = styled.div``;

const Chevron = styled.div`
    display: flex;
    align-items: center;
    img {
        margin-left: 16px;
        height: 54px;
        width: 54px;
        border-radius: 100%;
        cursor: pointer;
    }
`;

const DropDownOverlay = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: ${(props) => (props.openMenu ? "initial" : "none")};
`;

const DropDown = styled.button`
    position: absolute;
    top: 72px;
    right: 0;
    background-color: var(--cor-preto);
    min-width: 130px;
    height: 38px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    animation: growDown 100ms ease-in-out forwards;
    transform-origin: top center;
`;
