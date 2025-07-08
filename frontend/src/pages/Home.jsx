import Form from "../components/common/Form";
import { useTranslationStore } from "../stores/useTranslationStore";
import { useWordStore } from "../stores/useWordStore";

export default function Home() {
    const { translateWord } = useTranslationStore();
    const { word } = useWordStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!word.trim()) return;
        translateWord(word);        
    };

    return (
        <section className="flex justify-center items-center min-h-[600px]">
            <Form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md p-6 bg-white h-[600px] flex-col"
            />
        </section>
    );
}
