import axios from 'axios';
import store from '../kitchry-core/redux/store'
import { logoutAction } from '../kitchry-core/redux/login/LoginActions';

axios.interceptors.request.use(
    config => {
        config.headers = config.headers || {};
        const token = localStorage.getItem('token');
        if (token) config.headers['authorization'] = `Bearer ${token}`;
        return config;
    }
);

axios.interceptors.response.use(
    null,
    error => {
        if(error.response.status === 401){
            store.dispatch(logoutAction());
        }
        return Promise.reject(error);
    }
);

axios.loginRequest = (data) => {
    return axios.post()
}

export default axios;