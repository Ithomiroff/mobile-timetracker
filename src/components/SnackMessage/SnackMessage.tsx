import React from 'react';
import { Snackbar } from '@mui/material';

import { SnackMessageProps } from './domain/Props';
import { StyledAlert } from './domain/Styled';

const SnackMessage: React.FC<SnackMessageProps> = (props) => (
    <Snackbar { ...props } autoHideDuration={ 3000 }>
        <StyledAlert { ...props }>
            { props.message }
        </StyledAlert>
    </Snackbar>
);

export default React.memo(SnackMessage);
