import {
    Alert, AlertColor, styled, Theme,
} from '@mui/material';

const getBg = (theme: Theme, severity?: AlertColor) => {
    switch (severity) {
        case 'error': {
            return {
                backgroundColor: theme.palette.error.main,
            };
        }
        case 'success': {
            return {
                backgroundColor: theme.palette.success.main,
            };
        }
        default: {
            return {};
        }
    }
};

export const StyledAlert = styled(Alert)(({ theme, severity }) => ({
    width: '100%',
    maxWidth: '500px',
    color: '#fff',
    '& .MuiSvgIcon-root': {
        fill: '#fff',
    },
    ...getBg(theme, severity),
}));
