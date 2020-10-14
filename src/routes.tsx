import * as React from 'react';

import { routeURLs } from 'src/constants';

import { Mortgages } from './containers';

export default [
    {
        path: routeURLs.home,
        exact: true,
        component: () => <Mortgages />,
    },
];
