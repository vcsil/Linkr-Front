import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./shared/styles/globalStyles.js";

import dotenv from "dotenv";
dotenv.config();

export default function App() {
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Routes>

            </Routes>
        </BrowserRouter>
    );
};

export const API_URL = process.env.REACT_APP_API_BASE_URL;