import { RootState } from "..";

export const campsLoadedSelector = (state: RootState) => state.camps.loaded;
export const campsSelector = (state: RootState) => state.camps.camps || [];
export const selectedCampSelector = (state: RootState) =>
  state.camps.selectedCamp;
