import React from 'react';
import { renderRoutes } from 'react-router-config';

import routes from 'src/routes';

import { App } from './styled';
import Router from '../router';

import './App.scss';

export default () => (
    <App>
        <Router>{renderRoutes(routes)}</Router>
    </App>
);
