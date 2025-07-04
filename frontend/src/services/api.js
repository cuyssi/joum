import axios from "axios";

export const API_URL = "https://api.joum.anacas.dev";

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
