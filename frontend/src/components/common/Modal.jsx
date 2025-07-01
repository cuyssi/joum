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
