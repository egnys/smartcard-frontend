import axios from "axios";

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

instance.interceptors.request.use( (conf) => {
    conf.headers.Authorization = window.localStorage.getItem('token')
    return conf
})

export default instance