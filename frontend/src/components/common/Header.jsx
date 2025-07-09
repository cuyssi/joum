// ------------------------------------------------------------------------------
// components/common/Header.jsx - Cabecera principal//
// Este componente representa el encabezado de la aplicación. Actualmente muestra
// el logotipo de Joum y está preparado para incluir navegación u otros elementos
// en el futuro.
// 
// Author: Ana Castro
// ------------------------------------------------------------------------------

import logo from "../../assets/logo.png";

const Header = () => {
    return (
        <header className="flex justify-between items-center h-[10vh] bg-blue-500 px-4">
            <img src={logo} alt="Logo Joum" className="h-30" />
            
        </header>
    );
};

export default Header;
