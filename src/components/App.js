import { BrowserRouter, Routes, Route } from "react-router-dom";
import dotenv from "dotenv";

import Hashtag from "./pages/Hashtag.js";
import PageHashtag from "./pages/PageHashtag.js";
import TelaSignInUp from "./pages/PageSignInUp/TelaSignInUp.js";
import GlobalStyle from "./shared/styles/globalStyles.js";
import Timeline from "./pages/Timeline/Timeline.js";
import Header from "./Header/Header.js";
dotenv.config();

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path="/" element={<TelaSignInUp />} />
                <Route path="/sign-up" element={<TelaSignInUp />} />
                <Route path="/timeline" element={<Timeline />} />
                {/* route created only for tests */}
                <Route path="/hashtag" element={<Hashtag />} />
                {/* fim route created only for tests */}
                <Route path="/hashtag/:hashtag" element={<PageHashtag />} />
            </Routes>
        </BrowserRouter>
    );
}

export const API_URL = process.env.REACT_APP_API_BASE_URL;
