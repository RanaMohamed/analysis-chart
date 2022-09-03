import { createSlice } from "@reduxjs/toolkit";

interface LayoutState {
  theme: string;
}

const initialState: LayoutState = {
  theme: "light",
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState: initialState,
  reducers: {
    setTheme: (state, payload) => {
      state.theme = payload.payload;
    },
  },
});

export default layoutSlice.reducer;
