import { useState } from "react";
import AdminPanel from "../components/admin/AdminPanel";
import Button from "../components/common/Button";
import useAdminAuth from "../hooks/useAdminAuth";

export default function Admin() {
    const { isAuth, login, logout } = useAdminAuth();
    const [passwordInput, setPasswordInput] = useState("");
    const [password] = useState("");
    const [error, setError] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(password);
        if (!success) {
            setError("Contraseña incorrecta. Inténtalo de nuevo.");
        } else {
            setError("");
        }
    };

    if (!isAuth) {
        return (
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center min-h-[600px]">
                <div className="h-[150px]">
                    <h2 className="text-lg mb-6 font-semibold text-blue-900">Introduce la contraseña de admin:</h2>
                    <input
                        type="password"
                        value={passwordInput}
                        onChange={(e) => setPasswordInput(e.target.value)}
                        className="mb-4 p-2 border border-gray-300 rounded w-64 text-center"
                        placeholder="Contraseña"
                    />
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                </div>
                <Button
                    text="Acceder"
                    onClick={() => login(passwordInput)}
                    className=" bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                />
            </form>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-[600px] relative">
            <div className="absolute bottom-14 right-4">
                <Button
                    text="Cerrar sesión"
                    onClick={logout}
                    className="text-blue-600 relative font-bold border border-blue-600 hover:bg-blue-200 px-3 py-1 rounded"
                />
            </div>{" "}
            <div className="w-full max-w-md p-6">
                {" "}
                <AdminPanel />{" "}
            </div>{" "}
        </div>
    );
}
