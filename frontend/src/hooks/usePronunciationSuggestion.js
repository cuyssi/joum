// ------------------------------------------------------------------------------
// hooks/usePronunciationSuggestion.js - Hook para sugerir pronunciaciones//
// Este hook encapsula el flujo de sugerencia de pronunciación para una palabra
// específica. Se apoya en `useSuggestion` para enviar los datos al backend,
// y gestiona el estado del input y la confirmación de envío.
//
// Funcionalidades:
// - pronunciationInput: estado del campo de texto
// - submitted: indica si la sugerencia fue enviada con éxito
// - handleSuggest(): valida y envía la sugerencia
// - resetSubmission(): reinicia el estado de confirmación
//
// Dependencias:
// - useSuggestion(): lógica de red y manejo de errores
//
// Author: Ana Castro
// ------------------------------------------------------------------------------
import { useState } from "react";
import { useSuggestion } from "./useSuggestion";

export function usePronunciationSuggestion(word) {
    const [pronunciationInput, setPronunciationInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const { suggestWord, error } = useSuggestion();

    const handleSuggest = async () => {
        if (!pronunciationInput.trim()) return;        
        setSubmitted(false);
        await suggestWord(word, pronunciationInput);
        setPronunciationInput("");
        setSubmitted(true);
    };

    const resetSubmission = () => setSubmitted(false);

    return {
        pronunciationInput,
        setPronunciationInput,
        submitted,        
        error,
        handleSuggest,
        resetSubmission,
    };
}
