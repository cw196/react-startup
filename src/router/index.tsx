import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export default ({ children }) => (
    <Router history={createBrowserHistory()}>{children}</Router>
);
