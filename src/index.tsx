import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import theme from './config/Theme';
import { UserProvider } from './hooks/UseUser';
import App from './App';

import './index.css';

const queryClient = new QueryClient();

ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={ queryClient }>
            <ThemeProvider theme={ theme }>
                <UserProvider>
                    <Router>
                        <App />
                    </Router>
                </UserProvider>
            </ThemeProvider>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);
