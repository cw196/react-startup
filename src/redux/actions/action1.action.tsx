import { Ex1State } from "src/constants/types";
import { Action1, ACTION_1 } from "src/constants/actions/action1";

export function sendAction (payload: Ex1State): Action1 {
    return {
        type: ACTION_1,
        payload
    }
}