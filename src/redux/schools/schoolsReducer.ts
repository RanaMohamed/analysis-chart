import { SchoolRecord } from "@appTypes/schoolTypes";
import { createSlice } from "@reduxjs/toolkit";

interface SchoolsState {
  loaded: boolean;
  records: SchoolRecord[] | null;
  selectedSchool: string | null;
  detailsOptions: {
    selectedSchool: string | null;
    selectedMonth: string | null;
  };
}

const initialState: SchoolsState = {
  loaded: false,
  records: null,
  selectedSchool: null,
  detailsOptions: {
    selectedSchool: null,
    selectedMonth: null,
  },
};

export const schoolsSlice = createSlice({
  name: "schools",
  initialState,
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
