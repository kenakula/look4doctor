import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LOCAL_STORAGE_CURRENT_CITY } from 'app/shared/assets';
import { ICity, IRegion } from 'app/shared/types';
import { SliceError } from '../types';

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
    setCities: (state, { payload }: PayloadAction<ICity[]>) => {
      state.cities = payload;

      const defaultCity = payload.find(({ is_default }) => is_default);

      if (defaultCity) {
        state.defaultCity = defaultCity;
      }
    },
    setRegions: (state, { payload }: PayloadAction<IRegion[]>) => {
      state.regions = payload;
    },
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
});

export const {
  setCurrentLocationFromStorage,
  setCurrentLocationFromGeo,
  setCurrentLocationFromSelect,
  setCities,
  setRegions,
} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
