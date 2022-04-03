import axios from 'axios'
import https from 'https'
import AuthService from './auth.service'

const myaxios = axios.create({
    httpsAgent: new https.Agent({rejectUnauthorized: false}),
    withCredentials: true,
});

// add x-xsrf-token to all requests to the API
myaxios.interceptors.request.use(
    config => {
        return {
            ...config,
            headers: {
                ...AuthService.authHeader()
            },
        };
    },
    error => Promise.reject(error)
);

export default myaxios;