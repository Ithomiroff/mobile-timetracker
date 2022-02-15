import { Container, FormControl, styled } from '@mui/material';

export const StyledFormField = styled(FormControl)`
    margin-top: ${({ theme }) => theme.spacing(2)};

    .MuiSelect-select, .MuiFilledInput-input {
        padding-left: ${({ theme }) => theme.spacing(2)};
    }
    .MuiInputLabel-root {
        left: ${({ theme }) => theme.spacing(0.5)};
    }
    .MuiSvgIcon-root {
        right: ${({ theme }) => theme.spacing(2)};
    }
`;

export const StyledHeadContainer = styled(Container)`
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    padding-left: 0;
`;
