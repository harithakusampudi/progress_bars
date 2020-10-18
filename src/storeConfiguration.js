import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./modules";
import rootSaga from "./modules/sagas";

const sagaMiddleware = createSagaMiddleware();
export default () => {
  let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return { store };
};
