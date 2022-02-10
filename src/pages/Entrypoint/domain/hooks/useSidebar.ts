import React from 'react';

const useSidebar = () => {
    const [open, setOpen] = React.useState<boolean>(false);

    const onClose = () => setOpen(false);

    const onOpen = () => setOpen(true);

    return {
        open,
        onOpen,
        onClose,
    };
};

export default useSidebar;
