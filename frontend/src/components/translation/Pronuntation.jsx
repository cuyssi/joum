import { useWordStore } from "../../stores/useWordStore";
import { useDictionaryStore } from "../../stores/useDictionaryStore";
import PronunciationSuggestionModal from "../common/PronunciationSuggestionModal";

const Pronunciation = () => {
    const { word, hasSearched } = useWordStore();
    const { pronunciation } = useDictionaryStore();

    return (
        <div className="min-h-[180px] flex flex-col justify-center items-start">
            <div className="items-left w-full">
                {hasSearched && (
                    <div>
                        <h2 className="mt-20 text-gray-500 text-s font-medium">En español sonaría parecido a:</h2>
                        <p
                            className={`text-2xl font-semibold mb-10 ${
                                pronunciation ? "text-blue-600" : "text-red-400"
                            }`}
                        >
                            {pronunciation
                                ? pronunciation.charAt(0).toUpperCase() + pronunciation.slice(1)
                                : "No disponible aún"}
                        </p>
                    </div>
                )}

                {hasSearched && <PronunciationSuggestionModal word={word} pronunciation={pronunciation} />}
            </div>
        </div>
    );
};

export default Pronunciation;
