// ------------------------------------------------------------------------------
// hooks/useModal.js - Hook reutilizable para controlar modales
//
// Este hook gestiona el estado de apertura y cierre de un modal. Es útil para
// cualquier componente que necesite mostrar u ocultar contenido condicionalmente.
//
// Funcionalidades:
// - isOpen: booleano que indica si el modal está visible
// - open(): abre el modal
// - close(): cierra el modal y ejecuta un callback opcional
//
// Parámetros:
// - onCloseCallback: parametro, cuando invocamos a useModal le podemos pasar
// una función que se ejecuta al cerrar el modal.
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { useState } from "react";

export const useModal = (onCloseCallback) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => {
        setIsOpen(false);
        if (onCloseCallback) onCloseCallback();
    };

    return { isOpen, open, close };
};
