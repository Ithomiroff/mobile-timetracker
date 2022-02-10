import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';
import { SxProps } from '@mui/system';

const styles: SxProps = { backgroundColor: '#dee2e6', zIndex: (theme: any) => theme.zIndex.drawer + 1 };

const AppBackdropSpinner: React.FC = () => (
    <Backdrop
        sx={ styles }
        open={ true }
    >
        <CircularProgress color="primary" />
    </Backdrop>
);

export default AppBackdropSpinner;
