import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import * as storageToken from '../TokenStorage';

const base: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
        'Content-type': 'application/json',
    },
};

const createApiConfig = (authorized?: boolean, config?: Partial<AxiosRequestConfig>): AxiosInstance => {
    const newConfig = { ...base, ...config };

    if (authorized) {
        const token = storageToken.getAuthToken();

        if (!token) {
            throw new Error('No api token');
        }

        if (newConfig.headers) {
            newConfig.headers.Authorization = `Bearer ${token}`;
        }
    }

    return axios.create(newConfig);
};

export default createApiConfig;
