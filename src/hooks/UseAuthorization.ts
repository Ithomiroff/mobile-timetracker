import React from 'react';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import { postAuthorization } from '../config/api';
import { getAuthToken } from '../config/TokenStorage';

import { useUser } from './UseUser';

const checkAuth = async (tokenInfo: string) => postAuthorization('/SingleSignOn/getUserByTokenInfo', { tokenInfo });

const useAuthorization = () => {
    const navigate = useNavigate();

    const { user, setUser } = useUser();

    const unAuthorised = () => {
        navigate('/login');
        setUser(null);
    };

    const { mutate } = useMutation(checkAuth, {
        onSuccess: (response) => {
            if (response.object) {
                setUser(response.object);
                navigate('/');
            }
        },
        onError: unAuthorised,
    });

    React.useEffect(() => {
        const token = getAuthToken();

        if (!token) {
            unAuthorised();

            return;
        }

        mutate(token);
    }, []);

    return {
        user,
    };
};

export default useAuthorization;
