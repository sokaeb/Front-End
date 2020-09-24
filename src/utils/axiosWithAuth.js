import axios from 'axios';

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');
    // const token = `Basic ${btoa('lambda-client:lambda-secret')}`;

    return axios.create({
        baseURL: 'http://hsmm-secretfamilyrecipe.herokuapp.com',
        headers: 
        {
            // btoa is converting our client id/client secret into base64
            Authorization: `Bearer ${token}`,
            // "Content-Type": "application/x-www-form-urlencoded"
        }, 
    });
};