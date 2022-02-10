import React from 'react';

import { useUser } from '../../hooks/UseUser';
import { StyledRoot, StyledRootContent } from '../../styled/StyledLayout';

import AppToolbar from './components/AppToolbar';
import { Sidebar } from './components/Sidebar';
import useSidebar from './domain/hooks/useSidebar';

const Entrypoint: React.FC = () => {
    const { user } = useUser();

    const { open, onOpen, onClose } = useSidebar();

    if (!user) {
        return null;
    }

    return (
        <StyledRoot>
            <AppToolbar
                user={ user }
                onOpen={ onOpen }
            />
            <StyledRootContent />
            <Sidebar
                open={ open }
                onOpen={ onOpen }
                onClose={ onClose }
            />
        </StyledRoot>
    );
};

export default Entrypoint;
