import React from 'react';
import {Route, Switch} from "react-router-dom";

import constants from 'src/constants';
const {routeURLs} = constants;

import Home from 'src/pages/Home';

export default (
    <Switch>
        <Route
            path= {routeURLs.home}
            component= {Home}
        />
    </Switch>
)