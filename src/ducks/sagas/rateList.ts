import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { rateListActions } from '../actions/rateList.actions';

function* fetch() {
    try {
        const { data } = yield axios.get('/assets/simple.json');

        yield put(rateListActions.success(data));
    } catch (e) {
        yield put(rateListActions.failure(e));
    }
}

export default [takeLatest(rateListActions.TRIGGER, fetch)];
