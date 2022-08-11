import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { API_URL } from "../App.js";

export default function PageHashtag() {
    const { hashtag } = useParams();
    const [ hashtagPosts, setHashtagPosts ] = useState([]);

    useEffect(() => {
        const URL = `${API_URL}/hashtag/${hashtag}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .get(URL, config)
            .then(({ data }) => {
                setHashtagPosts(data);
            })
            .catch(() => {
                console.log("It was not possible to make this request, try again later!");
            })
    }, []);

    return;
};