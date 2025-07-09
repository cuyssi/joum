// ------------------------------------------------------------------------------
// pages/Home.jsx - Vista principal de Joum 
// Este componente representa la pantalla de inicio de la aplicación.
// Funcionalidades:
// - Usa Zustand para acceder a la palabra introducida y ejecutar la traducción
// - Renderiza el componente <Form /> con el manejador de envío
// - Valida que la palabra no esté vacía antes de traducir
//
// Hooks utilizados:
// - useWordStore: obtiene la palabra actual
// - useTranslationStore: ejecuta la traducción mediante la API
//
// Componentes utilizados:
// - <Form />: formulario reutilizable con input y botón
//
// Author: Ana Castro
// ------------------------------------------------------------------------------

import Form from "../components/common/Form";
import { useTranslationStore } from "../stores/useTranslationStore";
import { useWordStore } from "../stores/useWordStore";

export default function Home() {
    const { translateWord } = useTranslationStore();
    const { word } = useWordStore();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!word.trim()) return;
        translateWord(word);        
    };

    return (
        <section className="flex justify-center items-center min-h-[600px]">
            <Form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md p-6 bg-white h-[600px] flex-col"
            />
        </section>
    );
}
