/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../providers/Auth.js";

export default function Header({ entrou }) {
    const navigate = useNavigate();

    const { user, setUser } = useContext(AuthContext);

    const [openMenu, setOpenMenu] = useState(false);

    function reiniciaPag() {
        window.location.reload();
    }

    function Sair() {
        setUser({
            ...user,
            username: "",
            email: "",
            profile_img_url: "",
            token: "",
            entrou: false,
        });
        localStorage.removeItem("usuario");
        navigate("/");
    }

    useEffect(() => {
        setOpenMenu(false);
    }, [entrou]);

    return (
        <Container entrou={entrou}>
            <Head>
                <p
                    style={{ cursor: "pointer" }}
                    onClick={() => reiniciaPag()}
                    onKeyDown={() => reiniciaPag()}
                >
                    linkr
                </p>
                <MenuContainer>
                    <Menu onClick={() => setOpenMenu(!openMenu)}>
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
                    </Menu>
                    <DropDownOverlay
                        openMenu={openMenu}
                        onClick={() => setOpenMenu(!openMenu)}
                    >
                        <DropDown>
                            <p onClick={() => Sair()}>Logout</p>
                        </DropDown>
                    </DropDownOverlay>
                </MenuContainer>
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

    p {
        font-family: "Passion One";
        font-style: normal;
        font-weight: 700;
        font-size: 49px;
        line-height: 54px;
        letter-spacing: 0.05em;
        color: var(--cor-branco);
    }
`;

const MenuContainer = styled.div``;

const Menu = styled.div`
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
    min-width: 150px;
    overflow: auto;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    border-radius: 0px 0px 0px 20px;

    animation: growDown 100ms ease-in-out forwards;
    transform-origin: top center;

    p {
        font-family: "Lato";
        font-style: normal;
        font-weight: 700;
        font-size: 17px;
        line-height: 20px;
        letter-spacing: 0.05em;
        color: var(--cor-branco);

        cursor: pointer;
        padding: 9px 0 18px 0px;
        text-decoration: none;
        display: block;
    }
`;
