import { createSelector } from "reselect";
import { Map } from "immutable";

const bars = (state) => state.bars;

const makeSelectBarData = () =>
  createSelector(bars, (state) => {
    return Map(state.get("progressBarData")).toJS();
  });

const makeSelectLoadingBarData = () =>
  createSelector(bars, (state) => {
    return state.get("loading");
  });

export default {
  barsData: makeSelectBarData,
  loadingData: makeSelectLoadingBarData,
};
