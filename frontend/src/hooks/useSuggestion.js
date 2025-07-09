// ------------------------------------------------------------------------------
// hooks/useSuggestion.js - Hook personalizado para gestionar sugerencias//
// Este hook encapsula la lógica relacionada con las sugerencias de palabra.
// 
// Funcionalidades:
// - fetchSuggestions(): se ejecuta al montar el hook y carga las sugerencias
// - suggestWord(): envía una nueva sugerencia con estado "pendiente"
// - handleReview(): actualiza el estado de una sugerencia y la elimina del listado
//
// Utilidades:
// - cleanWord(): normaliza la palabra antes de enviarla
//
// Estado expuesto:
// - sugerencias: array de sugerencias pendientes
// - error: mensaje de error si ocurre algún fallo en la red
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { useState, useEffect } from "react";
import { createSuggestion, fetchSuggestions, reviewSuggestion } from "../services/suggestionService";
import { cleanWord } from "../utils/textHelpers";

export function useSuggestion() {
    const [sugerencias, setSugerencias] = useState([]);    
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
            setError(null);
            await createSuggestion({
                translation: cleanWord(word),
                suggested_pronunciation: suggestedPronunciation,
                status: "pendiente",
                fecha: new Date().toISOString(),
            });
        } catch (err) {
            console.error("Error enviando sugerencia:", err);
            setError("No se pudo enviar la sugerencia.");
        }
    };

    const handleReview = async (sug, newStatus) => {
        try {
            await reviewSuggestion(sug, newStatus);
            setSugerencias((prev) => prev.filter((s) => s.translation !== sug.translation));
        } catch (err) {
            console.error("Error al revisar sugerencia:", err);
            setError("No se pudo actualizar el estado.");
        }
    };

    return {
        sugerencias,        
        error,
        suggestWord,
        handleReview,
    };
}
