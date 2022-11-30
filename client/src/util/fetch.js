import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000/api",
})

export function getClients() {
    return api.get('/client')
}


export function registerClient(client) {
    return  api.post('/client')
}