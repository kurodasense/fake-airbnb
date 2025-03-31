import { getEntireRoomList } from "@/services/modules/entire";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchEntireDataAction = createAsyncThunk(
  "fetchEntire",
  async (page, { dispatch }) => {
    if (!page) page = 0;
    dispatch(changeIsLoadingAction(true));
    const { list, totalCount } = await getEntireRoomList(page, 20);
    dispatch(changeCurrentPageAction(page));
    dispatch(changeRoomListAction(list));
    dispatch(changeTotalCountAction(totalCount));
    dispatch(changeIsLoadingAction(false));
  }
);

const initialState = {
  currentPage: 0,
  roomList: [],
  totalCount: 0,
  isLoading: false,
};

const reducers = {
  changeCurrentPageAction(state, { payload }) {
    state.currentPage = payload;
  },
  changeRoomListAction(state, { payload }) {
    state.roomList = payload;
  },
  changeTotalCountAction(state, { payload }) {
    state.totalCount = payload;
  },
  changeIsLoadingAction(state, { payload }) {
    state.isLoading = payload;
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
  changeIsLoadingAction,
} = entireSlice.actions;

export default entireSlice.reducer;
