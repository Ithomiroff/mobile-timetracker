const key: string = 'mmtr-token';

const getAuthToken = (): string | null => localStorage.getItem(key);

const setAuthToken = (token: string): string => {
    localStorage.setItem(key, token);

    return token;
};

export { getAuthToken, setAuthToken };
