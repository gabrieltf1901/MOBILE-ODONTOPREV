import axios from 'axios';

const API_URL = 'http://seu-endpoint-dotnet/api';

export const getConsultas = async () => {
    try {
        const response = await axios.get(`${API_URL}/consultas`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar consultas:", error);
        throw error;
    }
};

export const getFaturamento = async () => {
    try {
        const response = await axios.get(`${API_URL}/faturamento`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar faturamento:", error);
        throw error;
    }
};
