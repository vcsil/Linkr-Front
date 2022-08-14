import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../App";

export default function UserPosts() {
    const { userId } = useParams();
    const [userPosts, setUserPosts] = useState({});

    // useEffect(() => {
    //     const URL = `${API_URL}/user/${userId}`;
    //     const config = {
    //         headers: {
    //             Authorization: `Bearer ${token}`
    //         }
    //     };

    //     axios
    //     .get(URL, config)
    //     .then(({ data }) => {
    //         setUserPosts(data);
    //     })
    //     .catch(() => {
    //         console.log("It was not possible to make this request, try again later!");
    //     })
    // }, []);

    return;
};