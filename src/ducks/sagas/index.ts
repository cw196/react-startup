import { all } from 'redux-saga/effects';
import rateList from './rateList';

export function* rootSaga() {
    yield all([...rateList]);
}
