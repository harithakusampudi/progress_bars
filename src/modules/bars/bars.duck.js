import { types } from "./types";
import { createRoutine } from "redux-saga-routines";
import { fromJS } from "immutable";

export const getProgressBarsData = createRoutine(types.GET);

export const updateBarData = (payload) => {
  return {
    type: types.UPDATE,
    payload,
  };
};

const initialState = fromJS({
  progressBarData: {},
  loading: true,
});
export default function bars(state = initialState, action) {
  switch (action.type) {
    case getProgressBarsData.TRIGGER:
      return state.set("loading", true);
    case getProgressBarsData.SUCCESS:
      return state.set("progressBarData", action.payload).set("loading", false);
    case types.UPDATE:
      return state.set("progressBarData", action.payload);

    default:
      return state;
  }
}
