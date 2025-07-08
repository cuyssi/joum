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


