import { actionTypes } from './constants';
// @ts-ignore
import { createRoutineCreator } from 'redux-saga-routines'; 

const createRoutine = createRoutineCreator(['UPDATE']);

export const calculatorParamsActions = createRoutine(
    actionTypes.calculatorParams,
);
