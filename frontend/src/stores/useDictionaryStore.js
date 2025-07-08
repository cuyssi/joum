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
