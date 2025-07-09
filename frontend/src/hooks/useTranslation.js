// ------------------------------------------------------------------------------
// hooks/useTranslation.js - Hook personalizado para traducir y obtener pronunciación
//
// Este hook combina la lógica de traducción y búsqueda de pronunciación en un
// solo punto de acceso. Utiliza Zustand para acceder a los stores globales.
//
// Dependencias:
// - useTranslationStore: estado de traducción
// - useDictionaryStore: estado de pronunciación
// - cleanWord(): utilidad para normalizar texto antes de procesarlo
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { useTranslationStore } from "../stores/useTranslationStore";
import { useDictionaryStore } from "../stores/useDictionaryStore";
import { cleanWord } from "../utils/textHelpers";

export const useTranslation = () => {
    const { translation, loading, error, translateWord, clear } = useTranslationStore();
    const { getPronunciation } = useDictionaryStore();

    const getTranslation = async (word) => {
        const clean = cleanWord(word);
        await translateWord(clean);
        getPronunciation(clean);
        return clean;
    };

    return {
        translation,
        loading,
        error,
        getTranslation,
        clear,
    };
};
