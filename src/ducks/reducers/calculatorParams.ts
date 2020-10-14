import { calculatorParamsActions } from '../actions/calculatorParams.actions';

import { termOptions } from 'src/helper';

const initState = {
    total: 500000,
    deposit: 20,
    term: termOptions[termOptions.length - 1],
};

// todo format with handler
export const calculatorParams = (state = initState, { type, payload }) => {
    switch (type) {
        case calculatorParamsActions.UPDATE:
            if (payload.total && parseInt(payload.total) < 1000) {
                return state;
            }

            return {
                ...state,
                ...payload,
            };
        default:
            return state;
    }
};
