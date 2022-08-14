import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        username: "",
        email: "",
        token: "",
        entrou: false,
    });
    useEffect(() => {
        const usuario = localStorage.getItem("usuario");
        if (usuario) {
            const objetoUsuario = JSON.parse(usuario);
            setUser({
                ...user,
                username: objetoUsuario.username,
                email: objetoUsuario.email,
                token: objetoUsuario.token,
                entrou: objetoUsuario.entrou,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const usuario = { user, setUser };

    return (
        <AuthContext.Provider value={usuario}>{children}</AuthContext.Provider>
    );
}
