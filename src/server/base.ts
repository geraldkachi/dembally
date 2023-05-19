import axios, { AxiosError } from "axios";
import { toast } from 'react-toastify';

const BACKEND_URL = import.meta.env.VITE_API_KEY

// const token = localStorage.getItem('token')

export const instance = () => {
    const instanceHttp = axios.create({
        baseURL: BACKEND_URL,
        timeout: 50000,
        headers: {
            "Content-Type": "application/json",
            'x-ApiKey': '<string>',
        },
    });

    instanceHttp.interceptors.request.use((config) => {
        config.headers = config.headers ?? {};

        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`
        // }
        return config;
    });

    return instanceHttp
}

export const next = (e: AxiosError | any) => {
    if (e?.response?.data?.message === "jwt expired") {
        toast.info("Logging you out!");
        setTimeout(() => {
            window.location.replace("/");
            localStorage.clear();
        }, 3000);
    }
    throw new Error(
        e.response ?
            (e.response.data.message || e?.message)
            :
            toast.error("Something Went Wrong!")
    );
};
