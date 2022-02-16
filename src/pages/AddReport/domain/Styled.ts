import { Container, FormControl, styled } from '@mui/material';

export const StyledHeadContainer = styled(Container)`
    padding-left: 0;
`;

export const StyledFormFieldItem = styled('div')(({ theme }) => ({
    marginTop: theme.spacing(2),
}));

export const StyledFormControl = styled(FormControl)`
    .MuiInputBase-root {
        background-color: #F7F7F7;
    }
    .MuiSelect-select {
        padding-left: ${({ theme }) => theme.spacing(2)};
    }

    .MuiInputLabel-root {
        left: ${({ theme }) => theme.spacing(0.5)};
    }

    .MuiSvgIcon-root {
        right: ${({ theme }) => theme.spacing(2)};
    }
    textarea {
        padding-left: ${({ theme }) => theme.spacing(0.5)};
    }
`;
