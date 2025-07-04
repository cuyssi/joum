import { useState } from "react";

export default function useAdminAuth() {
    const [isAuth, setIsAuth] = useState(() => {
        return localStorage.getItem("admin-auth") === "ok";
    });
    const login = (password) => {
        if (password === "admin123") {
            localStorage.setItem("admin-auth", "ok");
            setIsAuth(true);
            return true;
        }
        return false;
    };

    const logout = () => {
        localStorage.removeItem("admin-auth");
        setIsAuth(false);
    };

    return { isAuth, login, logout };
}
