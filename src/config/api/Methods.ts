import { AuthResponseDto } from '../../pages/Login/domain/Types';

import createApiConfig from './Config';

const postReq = async <T>(url: string, body: any, auth: boolean = true): Promise<T> => {
    const api = createApiConfig(auth);

    const response = await api.post(url, body);

    return response.data as T;
};

const getReq = async <T>(url: string): Promise<T> => {
    const api = createApiConfig(true);

    const response = await api.get(url);

    return response.data as T;
};

const postAuthorization = async (url: string, body: any): Promise<AuthResponseDto> => {
    const api = createApiConfig(false);

    const response = await api.post(url, body);

    const data = response.data as AuthResponseDto;

    if (!data.isSuccess) {
        throw new Error(data.message);
    }

    return response.data as AuthResponseDto;
};

const getImage = async (url: string): Promise<string> => {
    const api = createApiConfig(true, { responseType: 'arraybuffer' });

    const response = await api.get(url);

    const blob = new Blob(
        [response.data],
        { type: response.headers['content-type'] },
    );

    return window.URL.createObjectURL(blob);
};

export {
    postReq,
    getReq,
    postAuthorization,
    getImage,
};
