import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/styles/globalStyles.js";

import Hashtag from "./pages/Hashtag.js";
import PageHashtag from "./pages/PageHashtag.js";

import dotenv from "dotenv";
import TelaSignInOut from "./pages/PageSignInOut/TelaSignInOut.js";
dotenv.config();

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<TelaSignInOut />} />
                <Route path="/sign-up" element={<TelaSignInOut />} />
                {/* route created only for tests */}
                <Route path="/hashtag" element={<Hashtag />} />
                {/* fim route created only for tests */}
                <Route path="/hashtag/:hashtag" element={<PageHashtag />} />
            </Routes>
        </BrowserRouter>
    );
}

export const API_URL = process.env.REACT_APP_API_BASE_URL;
