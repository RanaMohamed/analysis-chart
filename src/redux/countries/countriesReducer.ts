import { createSlice } from "@reduxjs/toolkit";

export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    loaded: false,
    countries: null,
    selectedCountry: null,
  },
  reducers: {
    setCountries: (state, payload) => {
      state.loaded = true;
      state.countries = payload.payload;
    },
    setSelectedCountry: (state, payload) => {
      state.selectedCountry = payload.payload;
    },
  },
});

export default countriesSlice.reducer;
