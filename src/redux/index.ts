import {
  combineReducers,
  configureStore,
  PreloadedState,
} from "@reduxjs/toolkit";
import campsReducer from "@redux/camps/campsReducer";
import countriesReducer from "@redux/countries/countriesReducer";
import schoolsReducer from "@redux/schools/schoolsReducer";
import layoutReducer from "./layout/layoutReducer";

const store = configureStore({
  reducer: {
    schools: schoolsReducer,
    countries: countriesReducer,
    camps: campsReducer,
    layout: layoutReducer,
  },
});

const rootReducer = combineReducers({
  schools: schoolsReducer,
  countries: countriesReducer,
  camps: campsReducer,
  layout: layoutReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof setupStore>;
