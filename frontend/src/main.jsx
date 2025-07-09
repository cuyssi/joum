// ------------------------------------------------------------------------------
// main.jsx - Punto de entrada del frontend de Joum
//
// Este archivo monta la aplicación React dentro del DOM y la envuelve con
// BrowserRouter para habilitar la navegación por rutas. Es el punto de arranque
// de toda la interfaz de usuario.
//
// Estructura:
// - Importa el componente principal <App />
// - Usa ReactDOM para renderizarlo dentro del elemento con id="root"
// - Habilita navegación con react-router-dom
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
