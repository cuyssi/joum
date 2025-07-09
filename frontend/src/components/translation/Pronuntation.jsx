// ------------------------------------------------------------------------------
// components/translation/Pronunciation.jsx - Wrapper para sugerencia de pronunciación//
// Este componente actúa como intermediario entre el estado global y el modal
// de sugerencia de pronunciación. Solo renderiza el modal si se ha realizado
// una búsqueda (`hasSearched`).
//
// Funcionalidades:
// - Obtiene la palabra buscada y su pronunciación desde los stores globales
// - Muestra el componente `PronunciationSuggestionModal` con los datos necesarios
//
// Stores utilizados:
// - useWordStore(): obtiene `word` y `hasSearched`
// - useDictionaryStore(): obtiene `pronunciation`
//
// Componentes utilizados:
// - <PronunciationSuggestionModal />: modal que permite sugerir una pronunciación
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import PronunciationSuggestionModal from "../common/PronunciationSuggestionModal";
import { useWordStore } from "../../stores/useWordStore";
import { useDictionaryStore } from "../../stores/useDictionaryStore";

const Pronunciation = () => {
    const { word, hasSearched } = useWordStore();
    const { pronunciation } = useDictionaryStore();

    return (
        hasSearched && (
            <PronunciationSuggestionModal
                word={word}
                pronunciation={pronunciation}
            />
        )
    );
};

export default Pronunciation;
