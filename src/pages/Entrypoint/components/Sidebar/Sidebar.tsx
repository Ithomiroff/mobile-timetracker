import React from 'react';
import { Box, SwipeableDrawer } from '@mui/material';
import { SxProps } from '@mui/system';

import { SidebarProps } from '../../domain/Props';

const contentStyles: SxProps = { width: '80vw' };
const Sidebar: React.FC<SidebarProps> = ({
    open,
    onClose,
    onOpen,
}) => {
    return (
        <SwipeableDrawer
            anchor="left"
            open={ open }
            onOpen={ onOpen }
            onClose={ onClose }
        >
            <Box sx={ contentStyles }>
                1
            </Box>
        </SwipeableDrawer>
    );
};

export default Sidebar;
