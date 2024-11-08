import axios from "axios";

const axiosInst = axios.create({
    baseURL: 'https://api.example.com', 
    timeout: 1000,                      
    headers: {
        'Content-Type': 'application/json',
    },
});


export default axiosInst