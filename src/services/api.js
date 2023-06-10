import axios from "axios";

// 34003536/json/

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/"
})


export default api;