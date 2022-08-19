import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { API_URL } from "./App.js";
import axios from "axios";

function Hashtag({ hashtag }) {
    return (
        <Link to={`/hashtag/${hashtag}`}>
            <span># {hashtag}</span>
        </Link>
    );
};

export default function Trending() {
    const [hashtags, setHashtags] = useState([]);

    useEffect(() => {
        const usuarioLogado = localStorage.getItem("usuario");
        const { token } = JSON.parse(usuarioLogado);

        const URL = `${API_URL}/trending`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios
            .get(URL, config)
            .then(({ data }) => {
                setHashtags(data);
            });
    }, []);

    const createHashtagList = () => hashtags?.map(hashtag => <Hashtag key={hashtag.id} hashtag={hashtag.hashtag} />);
    const hashtagList = createHashtagList();

    return (
        <TrendingBox>
            <Title>
                <span>trending</span>
            </Title>
            <HashtagList>
                {hashtagList}
            </HashtagList>
        </TrendingBox>
    );
};


const TrendingBox = styled.div`
    width: 300px;
    box-sizing: border-box;
    background-color: #171717;
    border-radius: 16px;
    height: fit-content;
`;

const Title = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 10px 16px;
    font-family: Oswald, sans-serif;
    font-weight: 700;
    color: #FFFFFF;
    font-size: 27px;
    border-bottom: 1px solid #484848;
`

const HashtagList = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 16px 30px;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    span {
        font-family: Lato, sans-serif;
        font-weight: 700;
        font-size: 19px;
        color: #FFFFFF;
        letter-spacing: 0.05em;
    }

`
