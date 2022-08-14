import { combineReducers, configureStore } from "@reduxjs/toolkit";
import appReducer from "./reducers/appState";
import appFormReducer from './reducers/appForm'

const rootReducer = combineReducers({
  appReducer,
  appFormReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
