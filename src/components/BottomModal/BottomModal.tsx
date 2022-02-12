import React from 'react';
import { SwipeableDrawer } from '@mui/material';
import { SwipeableDrawerProps } from '@mui/material/SwipeableDrawer/SwipeableDrawer';

const BottomModal: React.FC<SwipeableDrawerProps> = (props) => {
    return (
        <SwipeableDrawer
            anchor="bottom"
            disableSwipeToOpen={ false }
            { ...props }
        >
            { props.children }
        </SwipeableDrawer>
    );
};

export default React.memo(BottomModal);
