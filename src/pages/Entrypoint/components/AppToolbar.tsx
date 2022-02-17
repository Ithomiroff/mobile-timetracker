import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
    AppBar, Avatar, Container, Grid, IconButton, Stack,
} from '@mui/material';

import { TOOLBAR_PORTAL } from '../../../utils/ToolbarPortal';
import { AppToolbarProps } from '../domain/Props';
import { StyledPortalToolbar } from '../domain/Styled';

const AppToolbar: React.FC<AppToolbarProps> = ({
    user,
    avatar,
    onOpen,
}) => {
    const letters = user ? user.firstName[0] + user.lastName[0] : '';

    return (
        <AppBar position="fixed">
            <Container maxWidth="sm">
                <Grid container={ true } alignItems="center" justifyContent="space-between">
                    <Grid item={ true }>
                        <Stack direction="row" alignItems="center">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={ onOpen }
                            >
                                <MenuIcon />
                            </IconButton>

                            <StyledPortalToolbar className={ TOOLBAR_PORTAL.className } />
                        </Stack>
                    </Grid>
                    <Grid item={ true }>
                        <IconButton
                            color="inherit"
                        >
                            <Avatar src={ avatar }>
                                { letters }
                            </Avatar>
                        </IconButton>
                    </Grid>
                </Grid>
            </Container>
        </AppBar>
    );
};

export default React.memo(AppToolbar);
