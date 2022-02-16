import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { useUser } from '../../hooks/UseUser';
import { StyledRoot, StyledRootContent } from '../../styled/StyledLayout';
import { AddReport } from '../AddReport';
import { Reports } from '../Reports';

import AppToolbar from './components/AppToolbar';
import { Sidebar } from './components/Sidebar';
import useAvatar from './domain/hooks/useAvatar';
import useSidebar from './domain/hooks/useSidebar';

const Entrypoint: React.FC = () => {
    const { user } = useUser();
    const { open, onOpen, onClose } = useSidebar();

    const avatar = useAvatar(user?.id);

    if (!user) {
        return null;
    }

    return (
        <StyledRoot>
            <AppToolbar
                user={ user }
                avatar={ avatar }
                onOpen={ onOpen }
            />
            <StyledRootContent>
                <Routes>
                    <Route index={ true } element={ <Reports /> } />
                    <Route path="add-report" element={ <AddReport /> } />
                </Routes>
            </StyledRootContent>
            <Sidebar
                open={ open }
                onOpen={ onOpen }
                onClose={ onClose }
            />
            <div id="snack-bar-container" />
        </StyledRoot>
    );
};

export default Entrypoint;
