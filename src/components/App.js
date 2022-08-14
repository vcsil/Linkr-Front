import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/styles/globalStyles.js";

import Hashtag from "./pages/Hashtag.js";
import PageHashtag from "./pages/PageHashtag.js";
import UserPosts from "./pages/UserPosts.js";

import dotenv from "dotenv";
dotenv.config();

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                {/* route created only for tests */}
                <Route path="/hashtag" element={<Hashtag />} />
                {/* fim route created only for tests */}
                <Route path="/hashtag/:hashtag" element={<PageHashtag />} />
                <Route path="/user/:id" element={<UserPosts />} />
            </Routes>
        </BrowserRouter>
    );
};

export const API_URL = process.env.REACT_APP_API_BASE_URL;