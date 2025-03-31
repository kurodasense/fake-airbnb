import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detailInfo: {},
  datailDemo: 0,
};

const reducers = {
  changeDetailInfoAction(state, { payload }) {
    state.detailInfo = payload;
  },
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers,
});

export const { changeDetailInfoAction } = detailSlice.actions;
export default detailSlice.reducer;
