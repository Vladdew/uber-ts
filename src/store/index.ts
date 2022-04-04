import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { mainReducer } from "./mainReducer";

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const middleWares = [thunk];

export const store = createStore(
  mainReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

export type RootState = ReturnType<typeof mainReducer>;
