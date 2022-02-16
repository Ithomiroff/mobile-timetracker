import React from 'react';

import { SnackMessageHook } from './Types';

const useSnackbar = (): SnackMessageHook => {
    const [message, setMessage] = React.useState<string | null>('');

    const openSnack = (value: string) => setMessage(value);

    const onClose = () => setMessage(null);

    return {
        message,
        open: Boolean(message),
        openSnack,
        onClose,
    };
};

export default useSnackbar;
