import { useState } from "react";

export const useModal = (onCloseCallback) => {
    const [isOpen, setIsOpen] = useState(false);

    const open = () => setIsOpen(true);

    const close = () => {
        setIsOpen(false);
        if (onCloseCallback) onCloseCallback();
    };

    return { isOpen, open, close };
};
