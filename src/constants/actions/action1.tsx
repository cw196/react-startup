import {Ex1State} from '../types';

export const ACTION_1 = 'ACTION_1';

export interface Action1 {
    type: typeof ACTION_1,
    payload: Ex1State
}