import { createSlice } from "@reduxjs/toolkit";

export const campsSlice = createSlice({
  name: "camps",
  initialState: {
    loaded: false,
    camps: null,
    selectedCamp: null,
  },
  reducers: {
    setCamps: (state, payload) => {
      state.loaded = true;
      state.camps = payload.payload;
    },
    setSelectedCamp: (state, payload) => {
      state.selectedCamp = payload.payload;
    },
  },
});

export default campsSlice.reducer;
