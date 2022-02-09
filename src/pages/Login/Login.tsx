import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import {
    Box,
    Container,
    Grow,
    TextField,
} from '@mui/material';
import { SxProps } from '@mui/system';

import { StyledLoginRoot, StyledLogo } from './domain/Styled';

const fieldStyles: SxProps = {
    width: 1,
    mb: 2,
    textAlign: 'center',
};

const Login: React.FC = () => {
    return (
        <StyledLoginRoot>
            <Grow in={ true } easing="ease-in">
                <Container maxWidth="sm">
                    <Box sx={ fieldStyles }>
                        <StyledLogo src="/logo.svg" alt="My mmtr" />
                    </Box>
                    <TextField label="Логин" variant="outlined" sx={ fieldStyles } autoFocus={ true } />
                    <TextField label="Пароль" type="password" variant="outlined" sx={ fieldStyles } />
                    <LoadingButton
                        sx={ fieldStyles }
                        size="large"
                        loading={ false }
                        variant="contained"
                    >
                        Войти
                    </LoadingButton>
                </Container>
            </Grow>
        </StyledLoginRoot>
    );
};

export default Login;
