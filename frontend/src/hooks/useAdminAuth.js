// ------------------------------------------------------------------------------
// hooks/useAdminAuth.js - Hook para autenticación local del panel de administración//
// Este hook gestiona el estado de autenticación del administrador utilizando
// almacenamiento local (`localStorage`). Se usa para proteger el acceso al
// panel de revisión de sugerencias.
//
// Funcionalidades:
// - isAuth: indica si el usuario está autenticado como admin
// - login(password): valida la contraseña y guarda el estado en localStorage
// - logout(): elimina la sesión del almacenamiento local
//
// ⚠️ Nota:
// Esta no es una forma segura de validación de usuario en producción. Dado que el
// proyecto tiene un enfoque didáctico por ahora, se utiliza este método provisional.
// Está pendiente de revisión para implementar una validación real desde el backend.
//
// Author: Ana Castro
// ------------------------------------------------------------------------------


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
