import { rateListActions } from '../actions/rateList.actions';

const initState = {
    data: [],
    error: null,
    loading: false,
};

export const rateList = (state = initState, { type, payload }) => {
    switch (type) {
        case rateListActions.TRIGGER:
            return {
                ...initState,
                loading: true,
            };
        case rateListActions.SUCCESS:
            return {
                ...initState,
                data: payload,
            };
        case rateListActions.FAILURE:
            return {
                ...initState,
                error: payload,
            };
        default:
            return state;
    }
};
