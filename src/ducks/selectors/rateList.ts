import { createSelector } from 'reselect';

export const selectRateListRaw = (state) => state.rateList;

export const selectCalculatorParams = (state) => state.calculatorParams;

// todo add interface
export const rateListSelector = createSelector(
    selectRateListRaw,
    (rateList) => rateList,
);

export const calculatorParamsSelector = createSelector(
    selectCalculatorParams,
    (calculatorParams) => calculatorParams,
);
