import axios from 'axios'
export const BASE_URL = 'https://localhost:44344/';
export const ENDPOINTS ={
    Client: 'Client'
}
export const apiEndpoint = endpoint =>{
    let url = BASE_URL + 'api/' + endpoint + '/';
    return{
        fetch: () => axios.get(url),
        fetchById: id => axios.get(url+id),
        post: newRecord =>axios.post(url, newRecord),
        put: (id, updateRecord) =>axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id),
    }
    
}
