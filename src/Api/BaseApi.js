import axios from 'axios'
const headers = {}
if(localStorage.getItem('token')) {
    headers['Authorization'] = 'Bearer '+ localStorage.getItem('token')
}
export default axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: headers
});