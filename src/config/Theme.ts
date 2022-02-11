import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: '#44474A',
            dark: '#15191D',
            light: '#BFBFBF',
            A700: '#EEEEEE',
            A400: '#F7F7F7',
            contrastText: '#F7F7F7',
        },
        secondary: {
            main: '#007BFF',
        },
        success: {
            main: '#28A745',
            light: '#E2F0DF',
        },
        warning: {
            main: '#FFC700',
        },
        error: {
            main: '#DD2629',
        },
    },
});

export default theme;
