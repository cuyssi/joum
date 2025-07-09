// ------------------------------------------------------------------------------
// services/api.js - Funciones para traducción y búsqueda de palabras
// Este módulo contiene funciones que interactúan con el backend para:
// - traducirPalabra(word): envía una palabra y devuelve
//   la traducción sugerida por el sistema.(POST /traducir)
// - buscarPalabra(word): consulta para obtener la pronunciación de una palabra
//  ya registrada. (GET /buscar)
//
// Variables:
// - API_URL: se obtiene desde el .env
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

export const traducirPalabra = async (word) => {
    const response = await axios.post(
        `${API_URL}/traducir`,
        { word },
        { headers: { "Content-Type": "application/json" } }
    );
    return response.data;
};

export const buscarPalabra = async (word) => {
    const response = await axios.get(`${API_URL}/buscar`, { params: { word } });
    return response.data;
};
