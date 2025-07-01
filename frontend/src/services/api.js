import axios from "axios";

export const API_URL = "http://192.168.1.20:8000";

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
