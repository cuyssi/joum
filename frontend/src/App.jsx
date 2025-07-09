// ------------------------------------------------------------------------------
// App.jsx - Componente principal de la interfaz de Joum
//
// Este componente define la estructura general de la aplicación:
// - Aplica un layout responsivo centrado con Tailwind CSS
// - Incluye el <Header />, <Footer /> y el <main> con las rutas principales
// - Usa react-router-dom para definir las vistas: Home y Admin
// - Utiliza clsx para componer clases condicionales de forma limpia,
//   adaptando la vista para escritorio en un diseño mobile-first.
//
// Author: Ana Castro
// ------------------------------------------------------------------------------


import { Routes, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import clsx from "clsx";
import "./App.css";

function App() { 

    return (
        <div className="flex flex-col sm:flex-row w-[100%] h-[100dvh] sm:items-center sm:justify-center sm:bg-gray-400">
            <div className={clsx("w-full h-full bg-white flex flex-col",
        "sm:w-[360px] sm:h-[auto] sm:rounded-xl sm:shadow-md sm:overflow-hidden")}>
                <Header />
                <main className="flex flex-1 bg-white justify-center items-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/admin" element={<Admin />} />
                    </Routes>
                </main>
                <Footer />                
            </div>
        </div>
    );
}

export default App;
