import { createSlice } from "@reduxjs/toolkit";

export const schoolsSlice = createSlice({
  name: "schools",
  initialState: {
    loaded: false,
    records: null,
    selectedSchool: null,
    detailsOptions: {
      selectedSchool: null,
      selectedMonth: null,
    },
  },
  reducers: {
    setSchoolsRecords: (state, payload) => {
      state.loaded = true;
      state.records = payload.payload;
    },
    setSelectedSchool: (state, payload) => {
      state.selectedSchool = payload.payload;
    },
    setDetailsOptions: (state, payload) => {
      state.detailsOptions = payload.payload;
    },
  },
});

export default schoolsSlice.reducer;
