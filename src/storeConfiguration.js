import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";
import storage from "redux-persist/lib/storage";

import rootReducer from "./modules";
import rootSaga from "./modules/sagas";
import { fromJS } from "immutable";

const persistConfig = {
  key: "root",
  storage,
  transforms: [fromJS({})],
};
const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  let persistor = persistStore(store);
  return { store, persistor };
};
