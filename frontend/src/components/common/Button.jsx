// ------------------------------------------------------------------------------
// components/common/Button.jsx - Botón reutilizable//
// Este componente representa un botón genérico que puede ser reutilizado en
// distintas partes de la aplicación. Recibe texto, una función de clic y clases
// personalizadas para adaptarse a distintos contextos visuales.
//
// Props:
// - text (string): texto que se muestra dentro del botón
// - onClick (function): función que se ejecuta al hacer clic
// - className (string): clases CSS para personalizar el estilo del botón// 
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

const Button = ({ text, onClick, className }) => {
    return (
        <button onClick={onClick} className={className}>
            {text}
        </button>
    );
};

export default Button;
