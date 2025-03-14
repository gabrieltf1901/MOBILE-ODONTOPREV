import axios from 'axios';

const API_URL = 'http://seu-endpoint-java/api';

export const getPacientes = async () => {
    try {
        const response = await axios.get(`${API_URL}/pacientes`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar pacientes:", error);
        throw error;
    }
};

export const getProfissionais = async () => {
    try {
        const response = await axios.get(`${API_URL}/profissionais`);
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar profissionais:", error);
        throw error;
    }
};
