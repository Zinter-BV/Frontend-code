import axios from "axios"

const api = axios.create({

    baseURL: 'https://involved-birgit-zinter-cb767b47.koyeb.app/api/', 
    headers: {
        "Content-Type": "application/json"
    }
})

export default api