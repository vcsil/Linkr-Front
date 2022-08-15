// import UserContext from "../../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { IconContext } from "react-icons";

import { HeaderMenu, Img, Logout, Box } from "./style";

export default function Header() {
    // const { userInfo } = useContext(UserContext);
    const [logoutMenu, setLogoutMenu] = useState(false);
    const navigate = useNavigate();

    function toggleMenu() {
        setLogoutMenu(!logoutMenu);
    }

    function logout(e) {
        e.stopPropagation();
        localStorage.removeItem("UserInfo");
        navigate("/");
    }

    function close() {
        setLogoutMenu(false);
    }

    return (
        <>
            <HeaderMenu toggle={logoutMenu}>
                <h2 onClick={() => navigate("/timeline")}>linkr</h2>
                {/* barra de pesquisar */}
                {/* <IconContext.Provider value={{ color: "white", size: 30 }}> */}
                    <div onClick={toggleMenu}>
                        <IoIosArrowDown />
                        {/* user image /> */}
                    </div>
                {/* </IconContext.Provider> */}
            </HeaderMenu>
            {logoutMenu ? (
                <>
                    <Logout onClick={logout} toggle={logoutMenu}>
                        <p>Logout</p>
                    </Logout>
                    <Box onClick={close} />
                </>
            ) : (
                <></>
            )}
        </>
    );
}