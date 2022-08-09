import dotenv from "dotenv";
dotenv.config();

export default function App() {
    return;
};

export const API_URL = process.env.REACT_APP_API_BASE_URL;