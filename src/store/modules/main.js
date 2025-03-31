import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false,
  },
};

const reducers = {
  changeHeaderConfigAction(state, { payload }) {
    state.headerConfig = payload;
  },
};
const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers,
});

export const { changeHeaderConfigAction } = mainSlice.actions;
export default mainSlice.reducer;
