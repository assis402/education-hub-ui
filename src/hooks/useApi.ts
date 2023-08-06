import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_EDUCATION_HUB_API_URL
})

export const useApi = () => ({
    validateToken: async (token: string) => {
        const response = await api.post('/validate', { token });
        return response.data;
    },
    login: async (email: string, password: string) => {
        const response = await api.post('/user/login', { email, password } );
        return response.data;
    }
})