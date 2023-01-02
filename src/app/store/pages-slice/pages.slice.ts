import { createSlice } from '@reduxjs/toolkit';
import { IHomePage } from 'app/shared/types';
import { getHomePageData } from './pages.thunks';

interface PagesState {
  homePage: IHomePage | null;
}

const initialState: PagesState = {
  homePage: null,
};

export const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getHomePageData.fulfilled, (state, { payload }) => {
      if (payload) {
        state.homePage = payload;
      }
    });
  },
});

export const pagesReducer = pagesSlice.reducer;
