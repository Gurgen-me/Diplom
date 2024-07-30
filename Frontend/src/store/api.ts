import axios from "axios"

const URL: string = 'http://localhost:3000/services'

const api = axios.create({
    // withCredentials: true,
    baseURL: URL
})

export default api