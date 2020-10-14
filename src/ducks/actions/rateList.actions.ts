import { actionTypes } from './constants';
import { createRoutine } from 'redux-saga-routines';

export const rateListActions = createRoutine(actionTypes.fetchRatesList);
