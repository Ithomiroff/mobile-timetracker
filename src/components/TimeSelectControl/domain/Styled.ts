import { styled } from '@mui/material';

export const StyledTimeControl = styled('div')<{error: boolean}>`
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};
    padding-right: ${({ theme }) => theme.spacing(2)};
    padding-left: ${({ theme }) => theme.spacing(2)};
    background-color: #F7F7F7;
    border-bottom: ${({ theme, error }) => (error ? `2px solid ${theme.palette.error.main}` : `1px solid ${theme.palette.primary.main}`)};
    color: ${({ theme, error }) => (error && theme.palette.error.main)};
`;
