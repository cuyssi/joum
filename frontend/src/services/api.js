import axios from "axios";

export const API_URL = import.meta.env.VITE_API_URL;

export const traducirPalabra = async (word) => {
    const response = await axios.post(
        `${API_URL}/traducir`,
        { word },
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response.data;
};

export const buscarPalabra = async (word) => {
    const response = await axios.get(`${API_URL}/buscar`, { params: { word } });
    return response.data;
};
