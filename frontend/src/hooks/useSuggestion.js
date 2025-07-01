import { useState, useEffect } from "react";
import { createSuggestion, fetchSuggestions, reviewSuggestion } from "../services/suggestionService";
import { quitarAcentos } from "../utils/textHelpers";

export function useSuggestion() {
    const [sugerencias, setSugerencias] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchSuggestions()
            .then(setSugerencias)
            .catch((err) => {
                console.error("Error al cargar sugerencias:", err);
                setError("No se pudieron cargar las sugerencias.");
            });
    }, []);

    const suggestWord = async (word, suggestedPronunciation) => {
        try {
            setIsLoading(true);
            setError(null);
            await createSuggestion({
                translation: quitarAcentos(word),
                suggested_pronunciation: suggestedPronunciation,
                status: "pendiente",
                fecha: new Date().toISOString(),
            });
        } catch (err) {
            console.error("Error enviando sugerencia:", err);
            setError("No se pudo enviar la sugerencia.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleReview = async (sug, newStatus) => {
        try {
            await reviewSuggestion(sug, newStatus);
            setSugerencias((prev) => prev.filter((s) => s.word !== sug.word));
        } catch (err) {
            console.error("Error al revisar sugerencia:", err);
            setError("No se pudo actualizar el estado.");
        }
    };

    return {
        sugerencias,
        isLoading,
        error,
        suggestWord,
        handleReview,
    };
}
