import { create } from "zustand";

export const useWordStore = create((set) => ({
    word: "",
    hasSearched: false,
    setWord: (word) => set({ word }),
    setHasSearched: (value) => set({ hasSearched: value }),
}));
