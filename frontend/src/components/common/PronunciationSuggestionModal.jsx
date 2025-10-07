// ------------------------------------------------------------------------------
// components/translation/PronunciationSuggestionModal.jsx//
// Este componente muestra la pronunciación sugerida de una palabra y permite
// al usuario proponer una alternativa si no le convence o si no hay ninguna.
//
// Funcionalidades:
// - Muestra la pronunciación actual si existe
// - Permite abrir un modal para sugerir una nueva pronunciación
// - Usa `usePronunciationSuggestion` para gestionar el input y el envío
// - Usa `useModal` para controlar la visibilidad del modal
//
// Hooks utilizados:
// - usePronunciationSuggestion(word): gestiona el input, envío y estado
// - useModal(resetSubmission): controla el modal y reinicia el estado al cerrar
// - useWordStore(): verifica si se ha hecho una búsqueda (`hasSearched`)
//
// Componentes utilizados:
// - <Button />: botón reutilizable
// - <Modal />: ventana modal con fondo desenfocado
//
// Casos contemplados:
// - Si hay pronunciación: se muestra y se ofrece opción de sugerir otra
// - Si no hay pronunciación pero sí búsqueda: se invita a sugerir una
// - Si no hay búsqueda: no se muestra nada
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { usePronunciationSuggestion } from "../../hooks/usePronunciationSuggestion";
import { useModal } from "../../hooks/useModal";
import { useWordStore} from "../../stores/useWordStore"
import Button from "../common/Button";
import Modal from "../common/Modal";

const PronunciationSuggestionModal = ({ word, pronunciation }) => {
    const { hasSearched } = useWordStore();
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
        <div className="min-h-[180px] flex flex-col justify-center items-start">
            {pronunciation ? (
                <div className="items-left w-full">
                    <h2 className="mt-20 text-gray-500 text-s font-medium">En español sonaría parecido a:</h2>
                    <p className="text-blue-600 text-2xl font-semibold mb-10">
                        {pronunciation.charAt(0).toUpperCase() + pronunciation.slice(1)}
                    </p>

                    <Button
                        text={
                            <span>
                                <span className="text-gray-500 font-medium">¿No te suena bien? </span>
                                <span className="underline text-blue-700 font-semibold">Propón otra</span>
                            </span>
                        }
                        onClick={(e) => {
                            e.preventDefault();
                            open(true)
                        }}
                        className="w-full text-center text-sm text-blue-500"
                    />
                </div>
            ) : hasSearched ? (
                <div className="items-left w-full">
                    <h2 className="mt-20 text-gray-500 text-s font-medium">En español sonaría parecido a:</h2>
                    <p className="text-red-400 text-2xl font-semibold mb-10">No disponible aún</p>

                    <Button
                        type="button"
                        onClick={(e) => {
                            e.preventDefault();
                            open(true)
                        }}
                        className="text-sm w-full text-center  font-semibold text-blue-700"
                        text={
                            <span>
                                <span className="text-gray-500 font-medium">¿Sabes cómo se pronuncia? </span>
                                <span className="text-blue-700 underline font-semibold">Propón una</span>
                            </span>
                        }
                    />
                </div>
            ) : null}

            <Modal isOpen={isOpen} onClose={close}>
                {!submitted ? (
                    <>
                        <h2 className="mt-6 text-lg font-semibold text-gray-700 mb-4">Sugiérenos una pronunciación</h2>
                        {renderForm()}
                    </>
                ) : (
                    <p className="text-blue-900 text-center font-medium">¡Gracias por tu sugerencia!</p>
                )}
            </Modal>
            </div>
        
    );
};

export default PronunciationSuggestionModal;
