import TranslationResult from "../translation/TranslationResult";
import VoicePlayer from "../translation/VoicePlayer";
import Pronunciation from "../translation/Pronuntation";

const Form = ({ className, onSubmit }) => {
    return (
        <form onSubmit={onSubmit} className={className}>
            <TranslationResult />
            <Pronunciation />
            <VoicePlayer />
        </form>
    );
};

export default Form;
