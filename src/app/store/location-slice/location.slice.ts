import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_CURRENT_CITY } from 'app/shared/assets';
import { ICity, IRegion } from 'app/shared/types';
import { SliceError, DirectusError } from '../types';
import { getRegions, getCities } from './location.thunks';

interface LocationState {
  storedLocation: string | null;
  defaultCity: ICity | undefined;
  currentLocation: ICity | null;
  regions: IRegion[] | null;
  cities: ICity[] | null;
  loading: boolean;
  error: SliceError[];
}

const initialState: LocationState = {
  storedLocation: localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY),
  defaultCity: undefined,
  currentLocation: null,
  regions: [],
  cities: [],
  loading: false,
  error: [],
};

export const locationSlice = createSlice({
  name: 'assets',
  reducers: {
    setCurrentLocationFromStorage: state => {
      if (state.storedLocation) {
        state.currentLocation = JSON.parse(state.storedLocation) as ICity;
      }
    },
    setCurrentLocationFromGeo: (
      state,
      { payload }: PayloadAction<ICity | null>,
    ) => {
      if (state.storedLocation) {
        return;
      }

      if (payload) {
        state.currentLocation = payload;

        return;
      }

      if (state.defaultCity) {
        state.currentLocation = state.defaultCity;
      }
    },
    setCurrentLocationFromSelect: (
      state,
      { payload }: PayloadAction<ICity>,
    ) => {
      state.currentLocation = payload;
      localStorage.setItem(LOCAL_STORAGE_CURRENT_CITY, JSON.stringify(payload));
    },
  },
  initialState,
  extraReducers: builder => {
    // regions
    builder
      .addCase(getRegions.pending, state => {
        state.loading = true;
      })
      .addCase(getRegions.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload) {
          state.regions = payload;
        }
      })
      .addCase(getRegions.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = (payload as DirectusError).errors;
      });
    // cities
    builder
      .addCase(getCities.pending, state => {
        state.loading = true;
      })
      .addCase(getCities.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload) {
          state.cities = payload;
          state.defaultCity = payload.find(({ is_default }) => is_default);
        }
      })
      .addCase(getCities.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = (payload as DirectusError).errors;
      });
  },
});

export const {
  setCurrentLocationFromStorage,
  setCurrentLocationFromGeo,
  setCurrentLocationFromSelect,
} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
