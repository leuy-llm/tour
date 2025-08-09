import axios from "axios";

const axiosApi = axios.create({
    baseURL: import.meta.env.VITE_API1_URL as string,
    timeout: 5000,
    //timeout: 1000,
    headers: {
        "Content-Type": "application/json",
        'Authorization': 'Bearer '
    }
});

var ip = ''
//Instand before request
axiosApi.interceptors.request.use(
    function (config: any) {
        config.headers.ip = ip
        return config
    },

    function (error: any) {
        return Promise.reject(error)
    }
);


export default axiosApi

