// ------------------------------------------------------------------------------
// services/suggestionService.js - Funciones para gestionar sugerencias
// Este módulo contiene funciones que interactúan con el backend para:
// - Obtener todas las sugerencias pendientes de revisión (GET /admin/sugerencias)
// - Enviar una nueva sugerencia desde el frontend (PUT /admin/revisar)
// - Aprobar o rechazar una sugerencia desde el panel de administración (POST /sugerencias/sugerir)
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { API_URL } from "./api";

export const fetchSuggestions = async () => {
    const res = await fetch(`${API_URL}/admin/sugerencias`);
    if (!res.ok) throw new Error("Error al obtener sugerencias");
    return res.json();
};

export const reviewSuggestion = async (sug, status) => {
    const res = await fetch(`${API_URL}/admin/revisar`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            translation: sug.translation,
            suggested_pronunciation: sug.suggested_pronunciation,
            status,
            fecha: new Date().toISOString(),
        }),
    });

    if (!res.ok) throw new Error("Error al actualizar estado");
    return await res.json();
};

export const createSuggestion = async (suggData) => {
    const res = await fetch(`${API_URL}/sugerencias/sugerir`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(suggData),
    });

    if (!res.ok) throw new Error("Error al enviar la sugerencia");
    return res.json();
};
