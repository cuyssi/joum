// ------------------------------------------------------------------------------
// components/common/Modal.jsx - Componente modal reutilizable//
// Este componente representa una ventana modal genérica. Se muestra centrada
// en pantalla con fondo semitransparente y desenfoque. Puede cerrarse haciendo
// clic fuera del contenido o en el icono de cierre.
//
// Props:
// - isOpen (boolean): controla si el modal está visible
// - onClose (function): función que se ejecuta al cerrar el modal
// - children (ReactNode): contenido que se renderiza dentro del modal 
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { MdClose } from "react-icons/md";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={onClose} />
            <div className="bg-white rounded-xl shadow-lg p-6 w-[90%] max-w-md relative">
                <div onClick={onClose} className="absolute top-2 right-2 text-blue-600 hover:text-blue-900 text-3xl">
                    <MdClose />
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
