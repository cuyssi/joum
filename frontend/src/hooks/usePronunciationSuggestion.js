import { useState } from "react";
import { useSuggestion } from "./useSuggestion";

export function usePronunciationSuggestion(word) {
    const [pronunciationInput, setPronunciationInput] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const { suggestWord, isLoading, error } = useSuggestion();

    const handleSuggest = async () => {
        if (!pronunciationInput.trim()) return;
        if (isLoading) return;
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
        isLoading,
        error,
        handleSuggest,
        resetSubmission,
    };
}
