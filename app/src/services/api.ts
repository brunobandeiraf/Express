import axios from "axios";

const api = axios.create({
    //ipconfig getifaddr en0
    //baseURL: 'http://172.20.10.3:3333/'
    baseURL: 'http://172.20.61.191:3333'
    //baseURL: 'http://localhost:3333/'
});

export { api }