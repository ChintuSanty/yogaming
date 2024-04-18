import axios from 'axios'

const api = axios.create({
    baseURL:"https://api.igdb.com/v4/",
    headers:{
        'Accept':'applications/json',
        'Client-ID': process.env.REACT_APP_CLIENT_ID,
        'Authorization': `Bearer ${process.env.REACT_APP_CLIENT_SCERET}`
    }
})

export default api;