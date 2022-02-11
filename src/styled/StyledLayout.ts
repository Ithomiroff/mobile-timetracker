import { styled } from '@mui/material';

export const StyledRoot = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
});

export const StyledRootContent = styled('main')`
    flex-grow: 1;
    padding-top: ${({ theme }) => theme.spacing(8)};
`;
