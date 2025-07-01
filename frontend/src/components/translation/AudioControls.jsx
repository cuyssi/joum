import { useAudioStore } from "../../stores/useAudioStore";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { RxSpeakerModerate } from "react-icons/rx";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GiTortoise } from "react-icons/gi";

const AudioControls = () => {
    const { rate, volume, setRate, setVolume } = useAudioStore();

    return (
        <div className="flex flex-col gap-4 w-full max-w-sm mx-auto mt-4">
            <div className="flex flex-col">
                <div className="flex justify-between text-blue-900 items-center mb-2">
                    <GiTortoise />
                    <AiOutlineThunderbolt />
                </div>
                <input
                    id="rate"
                    type="range"
                    min="0.1"
                    max="1.5"
                    step="0.1"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    className="w-full h-1.5 accent-blue-500 mt-[-5px]"
                />
            </div>

            <div className="flex flex-col">
                <div className="flex justify-between text-blue-900 items-center mb-2">
                    <RxSpeakerModerate />
                    <HiOutlineSpeakerWave />
                </div>
                <input
                    id="volume"
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full h-1.5 accent-blue-500 mt-[-5px]"
                />
            </div>
        </div>
    );
};

export default AudioControls;
