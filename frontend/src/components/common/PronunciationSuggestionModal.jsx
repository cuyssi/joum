import { usePronunciationSuggestion } from "../../hooks/usePronunciationSuggestion";
import { useModal } from "../../hooks/useModal";
import Button from "../common/Button";
import Modal from "../common/Modal";

const PronunciationSuggestionModal = ({ word, pronunciation }) => {
    const { pronunciationInput, setPronunciationInput, submitted, isLoading, error, handleSuggest, resetSubmission } =
        usePronunciationSuggestion(word, pronunciation);

    const { isOpen, open, close } = useModal(resetSubmission);

    const renderForm = () => (
        <div className="flex items-center gap-2">
            <input
                id="input_Pronunciation"
                type="text"
                value={pronunciationInput}
                onChange={(e) => setPronunciationInput(e.target.value)}
                className="p-2 border border-gray-300 rounded-md w-[75%]"
                placeholder="Escribe aquí..."
            />
            <Button
                text={isLoading ? "Enviando..." : "Enviar"}
                onClick={handleSuggest}
                className="bg-blue-600 p-2 hover:bg-blue-900 transition duration-300 text-white w-[25%] rounded-md"
                disabled={isLoading}
            />
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );

    return (
        <>
            <Button
                text={
                    <span>
                        <span className="text-gray-500 font-medium">¿No te suena bien? </span>
                        <span className="underline text-blue-700 font-semibold">Propón otra</span>
                    </span>
                }
                onClick={() => open(true)}
                className="w-full text-center text-sm text-blue-500"
            />

            <Modal isOpen={isOpen} onClose={close}>
                {!submitted ? (
                    <div>
                        <h2 className="mt-6 text-lg font-semibold text-gray-700 mb-4">Sugiérenos una pronunciación</h2>
                        {renderForm()}
                    </div>
                ) : (
                    <p className="text-blue-900 text-center font-medium">¡Gracias por tu sugerencia!</p>
                )}
            </Modal>
        </>
    );
};

export default PronunciationSuggestionModal;
