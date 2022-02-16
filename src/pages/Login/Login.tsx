import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Container, Grow } from '@mui/material';
import { SxProps } from '@mui/system';

import { FormTextField } from '../../components/FormTextField';
import { SnackMessage } from '../../components/SnackMessage';

import useLogin from './domain/hooks/UseLogin';
import { StyledLoginRoot, StyledLogo } from './domain/Styled';
import { LoginForm } from './domain/Types';

const fieldStyles: SxProps = {
    width: 1,
    mb: 3,
    textAlign: 'center',
};

const Login: React.FC = () => {
    const {
        control,
        handleSubmit,
        onLogin,
        isLoading,
        snackbar,
    } = useLogin();

    return (
        <StyledLoginRoot onSubmit={ handleSubmit(onLogin) }>
            <Grow in={ true } easing="ease-in">
                <Container maxWidth="sm">
                    <Box sx={ fieldStyles }>
                        <StyledLogo src="/logo.svg" alt="My mmtr" />
                    </Box>
                    <FormTextField<LoginForm>
                        autoComplete="off"
                        name="login"
                        control={ control }
                        disabled={ isLoading }
                        label="Логин"
                        variant="outlined"
                        sx={ fieldStyles }
                        autoFocus={ true }
                        rules={ { required: 'Поле обязательно для заполнения' } }
                    />
                    <FormTextField<LoginForm>
                        name="password"
                        control={ control }
                        disabled={ isLoading }
                        label="Пароль"
                        type="password"
                        variant="outlined"
                        sx={ fieldStyles }
                        rules={ { required: 'Поле обязательно для заполнения' } }
                    />
                    <LoadingButton
                        sx={ fieldStyles }
                        type="submit"
                        size="large"
                        loading={ isLoading }
                        variant="contained"
                    >
                        Войти
                    </LoadingButton>
                </Container>
            </Grow>

            <SnackMessage
                { ...snackbar }
                severity="error"
                color="error"
            />
        </StyledLoginRoot>
    );
};

export default Login;
