import barsSaga from "./bars/bars.saga";

export default function* root() {
  yield barsSaga();
}
