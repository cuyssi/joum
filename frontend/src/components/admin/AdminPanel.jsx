import { useSuggestion } from "../../hooks/useSuggestion";
import Button from "../common/Button";

const AdminPanel = () => {
    const { sugerencias, handleReview } = useSuggestion();

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl text-blue-900 font-bold mb-10">Panel de sugerencias</h2>
            <div className="h-[400px] overflow-y-auto touch-pan-y custom-scroll">
                {sugerencias.length === 0 ? (
                    <p>No hay sugerencias pendientes.</p>
                ) : (
                    sugerencias.map((sug) => (
                        <div key={sug.translation} className="mb-24 p-4 border border-blue-600 rounded shadow">
                            <p className="text-blue-900">
                                <strong>{sug.translation}</strong>: {sug.suggested_pronunciation}
                                <span className="ml-2 text-sm italic text-blue-500">
                                    ({sug.tipo === "modificación" ? "corrección" : "nueva"})
                                </span>
                            </p>
                            <div className="mt-4 flex gap-2">
                                <Button
                                    text="✅ Aprobar"
                                    onClick={() => handleReview(sug, "aprobado")}
                                    className="border border-green-500 hover:bg-green-200 text-green-500 px-3 py-1 rounded"
                                />

                                <Button
                                    text="❌ Rechazar"
                                    onClick={() => handleReview(sug, "rechazado")}
                                    className="border border-red-500 text-red-600 hover:bg-red-200 px-3 py-1 rounded"
                                />
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
