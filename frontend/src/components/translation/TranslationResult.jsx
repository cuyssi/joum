import { useTranslation } from "../../hooks/useTranslation";
import { useWordStore } from "../../stores/useWordStore";
import { usePronunciationSuggestion } from "../../hooks/usePronunciationSuggestion";
import { unlockSpeech } from "../../stores/useAudioStore";
import Button from "../common/Button";

export default function TranslationResult() {
    const { word, setWord, setHasSearched } = useWordStore();
    const { translation, getTranslation } = useTranslation();
    const { resetSubmission } = usePronunciationSuggestion(word);

    const handleSubmit = async (e) => {
        e.preventDefault();        
        if (!word.trim()) return;
        const translated = await getTranslation(word);
        if (!translated) return;
        setHasSearched(true);
        resetSubmission();
        unlockSpeech();
    };

    return (
        <div className="min-h-[180px] flex flex-col justify-center items-center">
            <h2 className="mt-30 text-3xl font-semibold text-blue-900 mb-6">¿Qué quieres traducir?</h2>
            <div className="w-full flex gap-2">
                <input
                    type="text"
                    value={word}
                    onChange={(e) => setWord(e.target.value)}
                    className="w-[70%] border border-gray-300 rounded-md px-4 py-2 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    placeholder="Escribe aquí..."
                />

                <Button
                    text="Traducir"
                    onClick={handleSubmit}
                    className="w-[30%] bg-blue-500 text-white font-medium py-2 rounded-md hover:bg-blue-900 transition duration-300"
                />
            </div>

            {translation && (
                <div className="mt-15 text-left w-[100%]">
                    <p className="text-gray-500 font-medium w-full">Traducción:</p>
                    <p className="text-blue-600 text-2xl font-semibold">
                        {translation.charAt(0).toUpperCase() + translation.slice(1)}
                    </p>
                </div>
            )}
        </div>
    );
}
