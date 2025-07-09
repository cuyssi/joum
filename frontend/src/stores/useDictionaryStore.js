// ------------------------------------------------------------------------------
// store/useDictionaryStore.js - Estado global para pronunciaciones en Joum
//
// Este store de Zustand gestiona la lógica de consulta al diccionario de
// pronunciaciones. Se conecta con la API para obtener la pronunciación de una
// palabra ya registrada en la base de datos.
//
// Estado expuesto:
// - pronunciation: resultado de la búsqueda
// - error: mensaje de error si la búsqueda falla 
// - clear(): reinicia el estado de pronunciación y error
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { create } from "zustand";
import { buscarPalabra } from "../services/api";

export const useDictionaryStore = create((set) => ({
    pronunciation: "",
    error: null,

    getPronunciation: async (word) => {
        try {
            const res = await buscarPalabra(word);
            set({ pronunciation: res.pronunciation, error: null });
        } catch {
            set({ error: "Error al buscar pronunciación", pronunciation: "" });
        }
    },

    clear: () => set({ pronunciation: "", error: null }),
}));
