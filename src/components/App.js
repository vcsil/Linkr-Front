import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/styles/globalStyles.js";

import TimelinePage from "../pages/TimelinePage/index.js";

import dotenv from "dotenv";
dotenv.config();

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>
                <Route path="/timeline" element={<TimelinePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export const API_URL = process.env.REACT_APP_API_BASE_URL;