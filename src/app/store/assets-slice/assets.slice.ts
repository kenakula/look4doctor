import { createSlice } from '@reduxjs/toolkit';

import { ISettings, ISpecialty } from 'app/shared/types';
import { DirectusError, SliceError } from '../types';
import { getSettings, getSpecialties } from './assets.thunks';

interface AssetsState {
  specialties: ISpecialty[];
  settings: ISettings | null;
  loading: boolean;
  assetsError: SliceError[];
}

const initialState: AssetsState = {
  specialties: [],
  settings: null,
  loading: false,
  assetsError: [],
};

export const assetsSlice = createSlice({
  name: 'assets',
  reducers: {},
  initialState,
  extraReducers: builder => {
    // settings
    builder
      .addCase(getSettings.pending, state => {
        state.loading = true;
      })
      .addCase(getSettings.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload) {
          state.settings = payload;
        }
      })
      .addCase(getSettings.rejected, (state, { payload }) => {
        state.loading = false;
        state.assetsError = (payload as DirectusError).errors;
      });
    // specialties
    builder
      .addCase(getSpecialties.pending, state => {
        state.loading = true;
      })
      .addCase(getSpecialties.fulfilled, (state, { payload }) => {
        state.loading = false;
        if (payload) {
          state.specialties = payload;
        }
      })
      .addCase(getSpecialties.rejected, (state, { payload }) => {
        state.loading = false;
        state.assetsError = (payload as DirectusError).errors;
      });
  },
});

export const assetsReducer = assetsSlice.reducer;
