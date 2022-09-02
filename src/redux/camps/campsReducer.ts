import { createSlice } from "@reduxjs/toolkit";

interface CampsState {
  loaded: boolean;
  camps: string[] | null;
  selectedCamp: string | null;
}

const initialState: CampsState = {
  loaded: false,
  camps: null,
  selectedCamp: null,
};

export const campsSlice = createSlice({
  name: "camps",
  initialState,
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
