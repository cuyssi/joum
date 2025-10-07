import Form from "../components/common/Form";
import { useWordStore } from "../stores/useWordStore";

export default function Home() {
    const { hasSearched } = useWordStore();

    return (
        <section className="relative flex justify-center items-center min-h-[600px] flex-col gap-6">
            {/* Mensaje informativo solo si aún no ha buscado nada */}
            {!hasSearched && (
                <div className="absolute mt-20 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl p-4 mx-6 text-center shadow-sm max-w-md">
                    <p className="font-medium">👋 Bienvenido a Joum</p>
                    <p className="text-sm mt-1">
                        Escribe una palabra en español y verás su traducción al inglés 
                        junto con una pronunciación castellanizada.
                    </p>
                </div>
            )}

            <Form className="flex w-full max-w-md p-6 bg-white h-[600px] flex-col" />
        </section>
    );
}
