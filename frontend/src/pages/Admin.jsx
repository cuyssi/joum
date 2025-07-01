import { useState } from "react";
import AdminPanel from "../components/admin/AdminPanel";
import Button from "../components/common/Button";
import useAdminAuth from "../hooks/useAdminAuth";

export default function Admin() {
    const { isAuth, login, logout } = useAdminAuth();
    const [passwordInput, setPasswordInput] = useState("");

    if (!isAuth) {
        return (
            <div className="p-6 flex flex-col justify-center items-center min-h-screen bg-gray-50">
                <h2 className="text-lg mb-6 font-semibold text-blue-900">Introduce la contraseña de admin:</h2>
                <input
                    type="password"
                    value={passwordInput}
                    onChange={(e) => setPasswordInput(e.target.value)}
                    className="mb-4 p-2 border border-gray-300 rounded w-64 text-center"
                    placeholder="Contraseña"
                />
                <Button
                    text="Acceder como Admin"
                    onClick={() => login(passwordInput)}
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
                />
            </div>
        );
    }

    return (
        <div>
            <div className="absolute bottom-14 right-4">
                <Button
                    text="Cerrar sesión"
                    onClick={logout}
                    className="text-blue-600 font-bold border border-blue-600 hover:bg-blue-200 px-3 py-1 rounded"
                />
            </div>

            <div className="w-full max-w-md p-6">
                <AdminPanel />
            </div>
        </div>
    );
}
