import React from 'react';

import { AppBackdropSpinner } from './components/AppBackdropSpinner';
import useAuthorization from './hooks/UseAuthorization';
import AppRoutes from './routes/AppRoutes';

const App = () => {
    const { user } = useAuthorization();

    if (user === undefined) {
        return <AppBackdropSpinner />;
    }

    return <AppRoutes />;
};

export default App;
