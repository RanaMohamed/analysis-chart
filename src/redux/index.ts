import { configureStore } from "@reduxjs/toolkit";
import campsReducer from "@redux/camps/campsReducer";
import countriesReducer from "@redux/countries/countriesReducer";
import schoolsReducer from "@redux/schools/schoolsReducer";

const store = configureStore({
  reducer: {
    schools: schoolsReducer,
    countries: countriesReducer,
    camps: campsReducer,
  },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
