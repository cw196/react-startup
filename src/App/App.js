import React from 'react';
import { HashRouter } from 'react-router-dom';

import routes from 'src/routes';

export default (props) => {

    let {classes} = props;

    return (
        <div className={classes.base}>
            <HashRouter>{routes}</HashRouter>
        </div>
    )
}