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
