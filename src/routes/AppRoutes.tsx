import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Entrypoint } from '../pages/Entrypoint';
import { Login } from '../pages/Login';

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/*" element={ <Entrypoint /> } />
        <Route path="/login" element={ <Login /> } />
    </Routes>
);

export default AppRoutes;
