import { useTranslationStore } from "../stores/useTranslationStore";
import { useDictionaryStore } from "../stores/useDictionaryStore";
import { quitarAcentos } from "../utils/textHelpers";

export const useTranslation = () => {
    const { translation, loading, error, translateWord, clear } = useTranslationStore();
    const { getPronunciation } = useDictionaryStore();

    const getTranslation = async (word) => {
        const clean = quitarAcentos(word.trim().toLowerCase());

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
