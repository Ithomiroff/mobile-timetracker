import { useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

import useSnackbar from '../../../../components/SnackMessage/domain/UseSnackbar';
import { setAuthToken } from '../../../../config/TokenStorage';
import { useUser } from '../../../../hooks/UseUser';
import { loginAction } from '../Requests';
import { LoginForm } from '../Types';

const useLogin = () => {
    const {
        control,
        handleSubmit,
    } = useForm<LoginForm>({
        defaultValues: {
            login: '',
            password: '',
        },
        mode: 'onSubmit',
    });

    const snackbar = useSnackbar();

    const navigate = useNavigate();

    const { setUser } = useUser();

    const { mutate, isLoading } = useMutation(loginAction, {
        onSuccess: (data) => {
            const token = data?.object?.userToken?.tokenInfo;

            if (token) {
                setUser(data.object);
                setAuthToken(token);
                navigate('/');
            }
        },
        onError: (err: Error) => snackbar.openSnack(err.message),
    });

    const onLogin = (body: LoginForm) => mutate(body);

    return {
        control,
        onLogin,
        handleSubmit,
        isLoading,
        snackbar,
    };
};

export default useLogin;
