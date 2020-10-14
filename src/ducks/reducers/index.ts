import { combineReducers } from 'redux';
import { rateList } from './rateList';
import { calculatorParams } from './calculatorParams';

export default combineReducers({
    rateList,
    calculatorParams,
});
