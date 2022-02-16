import { Box, styled } from '@mui/material';

export const StyledFullWidth = styled(Box)`
    position: fixed;
    top: 0;
    background: #F7F7F7;
    z-index: 1111;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    animation: appear .2s linear;
    padding-top: ${({ theme }) => theme.spacing(1)};
    padding-bottom: ${({ theme }) => theme.spacing(1)};

    @keyframes appear {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`;
