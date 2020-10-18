import { put, call, takeLatest } from "redux-saga/effects";
import { getProgressBarsData } from "./bars.duck";
import { getBarsDataService } from "./bars.service";

export function* get() {
  try {
    yield put(getProgressBarsData.request());
    const response = yield call(getBarsDataService);
    yield put(getProgressBarsData.success(response.response));
  } catch (err) {
    yield put(getProgressBarsData.failure(err));
  }
}

export default function* barsSaga() {
  yield takeLatest(getProgressBarsData.TRIGGER, get);
}
