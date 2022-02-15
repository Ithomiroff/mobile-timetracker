import { Box, styled } from '@mui/material';

export const StyledFullWidth = styled(Box)`
    position: fixed;
    top: 0;
    background: #fff;
    z-index: 1111;
    width: 100%;
    height: 100%;
    animation: appear .2s linear;

    @keyframes appear {
        from {
            transform: scale(0);
        }
        to {
            transform: scale(1);
        }
    }
`;
