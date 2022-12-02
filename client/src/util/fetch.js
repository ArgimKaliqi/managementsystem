import axios from 'axios'

const api = axios.create({
    baseURL: "http://localhost:5000/api",
})

export function getClients() {
    return api.get('/client')
}


// export function registerClient() {
//     return  api.post('/client')
// }

export function getAdvocates() {
    return api.get('/advocate')
}

export function getCompanies() {
    return api.get('/company')
}