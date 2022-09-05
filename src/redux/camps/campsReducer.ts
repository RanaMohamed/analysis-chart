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
      if (payload.payload.length) {
        state.selectedCamp = payload.payload[0];
      }
    },
    setSelectedCamp: (state, payload) => {
      state.selectedCamp = payload.payload;
    },
  },
});

export default campsSlice.reducer;
