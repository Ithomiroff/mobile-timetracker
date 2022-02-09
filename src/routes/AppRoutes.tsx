import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Login } from '../pages/Login';

import Entrypoint from './Entrypoint';

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/*" element={ <Entrypoint /> } />
        <Route path="/login" element={ <Login /> } />
    </Routes>
);

export default AppRoutes;
