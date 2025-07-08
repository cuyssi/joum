import Button from "../common/Button";
import AudioControls from "./AudioControls";
import { useTranslationStore } from "../../stores/useTranslationStore";
import { useAudioStore } from "../../stores/useAudioStore";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

const VoicePlayer = () => {
    const { translation } = useTranslationStore();
    const { rate, volume } = useAudioStore();

    const speak = () => {
        if (!translation) return;
        const utterance = new SpeechSynthesisUtterance(translation);
        utterance.lang = "en-GB";
        utterance.rate = rate;
        utterance.volume = volume;
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
    };

    if (!translation) return null;

    return (
        <div className="mt-8 flex flex-row items-center justify-center border px-4 pb-4 border-blue-200 rounded-xl gap-10 w-[100%] max-w-sm mx-auto mb-4">
            <Button
                onClick={speak}
                text={<HiOutlineSpeakerWave />}
                className="flex-1 mt-5 bg-gray-200 text-blue-900 border-gray-200 text-4xl active:scale-90 px-4 py-4 rounded-full hover:bg-blue-600 transition-all duration-300 mx-auto"
            />
            <AudioControls />
        </div>
    );
};

export default VoicePlayer;
