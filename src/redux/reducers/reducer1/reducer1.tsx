import { Ex1State } from "src/constants/types";
import { Action1, ACTION_1 } from "src/constants/actions/action1";

const initState: Ex1State = {};

export const reducer1 = (state = initState, action: Action1) => {
  switch (action.type) {
    case ACTION_1:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
