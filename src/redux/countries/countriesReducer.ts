import { createSlice } from "@reduxjs/toolkit";

interface CountriesState {
  loaded: boolean;
  countries: string[] | null;
  selectedCountry: string | null;
}

const initialState: CountriesState = {
  loaded: false,
  countries: null,
  selectedCountry: null,
};

export const countriesSlice = createSlice({
  name: "countries",
  initialState: initialState,
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
