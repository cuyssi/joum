// ------------------------------------------------------------------------------
// store/useWordStore.js - Estado global para la palabra buscada en Joum
//
// Este archivo define un store con Zustand para gestionar el estado compartido
// entre componentes. Se utiliza para almacenar:
// - La palabra actual introducida por el usuario
// - Un flag que indica si se ha realizado una búsqueda
//
// Funciones disponibles:
// - setWord(word): actualiza la palabra buscada
// - setHasSearched(value): marca si se ha hecho una búsqueda 
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { create } from "zustand";

export const useWordStore = create((set) => ({
    word: "",
    hasSearched: false,
    setWord: (word) => set({ word }),
    setHasSearched: (value) => set({ hasSearched: value }),
}));
