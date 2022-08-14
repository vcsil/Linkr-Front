import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Timeline() {
    const navigate = useNavigate();

    useEffect(() => {
        if (!localStorage.getItem("usuario")) {
            navigate("/");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return <></>;
}

export default Timeline;
