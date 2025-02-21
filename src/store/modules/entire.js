import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getEntireListAction = createAsyncThunk(
  "fetchEntire",
  async (payload, { dispatch, getState }) => {
    const state = getState();
    const currentPage = state.entire.currenPage;
    const { list, totalCount } = await getEntireRoomList(currentPage, 20);
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
  }
);

const initialState = {
  currenPage: 0,
  roomList: [],
  totalCount: 0,
};

const reducers = {
  changeCurrentPageAction(state, { payload }) {
    state.currenPage = payload;
  },
  changeRoomListAction(state, { payload }) {
    state.roomList = payload;
  },
  changeTotalCountAction(state, { payload }) {
    state.totalCount = payload;
  },
};

const entireSlice = createSlice({
  name: "entire",
  initialState,
  reducers,
});

export const {
  changeCurrentPageAction,
  changeRoomListAction,
  changeTotalCountAction,
} = entireSlice.actions;

export default entireSlice.reducer;
