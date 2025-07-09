// ------------------------------------------------------------------------------
// store/useTranslationStore.js - Estado global para traducciones en Joum
//
// Este store de Zustand gestiona el estado relacionado con la traducción de
// palabras. Encapsula la lógica de llamada a la API y expone:
// - translation: resultado de la traducción
// - loading: indica si la petición está en curso
// - error: mensaje de error si la traducción falla
//
// Funciones disponibles:
// - translateWord(word): realiza la petición a la API y actualiza el estado
// - clear(): reinicia el estado de traducción y error.
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { create } from "zustand";
import { traducirPalabra } from "../services/api";

export const useTranslationStore = create((set) => ({
    translation: "",
    loading: false,
    error: null,

    translateWord: async (word) => {
        set({ loading: true, error: null });
        try {
            const result = await traducirPalabra(word);
            set({ translation: result.translation, loading: false });
        } catch {
            set({ error: "Error al traducir", loading: false });
        }
    },

    clear: () => set({ translation: "", error: null }),
}));


