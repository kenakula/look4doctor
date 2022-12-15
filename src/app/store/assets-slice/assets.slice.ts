import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  LOCAL_STORAGE_CURRENT_CITY,
  LOCAL_STORAGE_CURRENT_REGION,
} from 'app/shared/assets';
import { ICity, IRegion, ISettings, ISpecialty } from 'app/shared/types';
import {
  getCities,
  getRegions,
  getSettings,
  getSpecialties,
} from './assets.thunks';

interface AssetError {
  message: string;
}

interface DirectusError {
  errors: AssetError[];
}

interface AssetsState {
  specialties: ISpecialty[];
  settings: ISettings | null;
  regions: IRegion[] | null;
  currentRegion: IRegion | null;
  cities: ICity[] | null;
  currentCity: ICity | null;
  loading: boolean;
  assetsError: AssetError[];
}

const initialState: AssetsState = {
  specialties: [],
  settings: null,
  regions: [],
  cities: [],
  currentCity: null,
  currentRegion: null,
  loading: false,
  assetsError: [],
};

export const assetsSlice = createSlice({
  name: 'assets',
  reducers: {
    getSavedCityAndRegion: state => {
      const storedCity = localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY);

      if (storedCity) {
        const city = JSON.parse(storedCity) as ICity;
        state.currentCity = city;

        if (city.region) {
          state.currentRegion = city.region;
        }
      }
    },
    setCurrentCity: (state, { payload }: PayloadAction<ICity>) => {
      state.currentCity = payload;

      if (payload.region) {
        state.currentRegion = payload.region;
      }

      localStorage.setItem(LOCAL_STORAGE_CURRENT_CITY, JSON.stringify(payload));
    },
    setGeocodedCity: (state, { payload }: PayloadAction<ICity>) => {
      const storedCity = localStorage.getItem(LOCAL_STORAGE_CURRENT_CITY);

      if (storedCity) {
        return;
      }

      state.currentCity = payload;

      if (payload.region) {
        state.currentRegion = payload.region;
      }

      localStorage.setItem(LOCAL_STORAGE_CURRENT_CITY, JSON.stringify(payload));
    },
    setCurrentRegion: (
      state,
      { payload }: PayloadAction<IRegion | undefined>,
    ) => {
      if (payload) {
        state.currentRegion = payload;

        return;
      }

      const storedRegion = localStorage.getItem(LOCAL_STORAGE_CURRENT_REGION);

      if (storedRegion) {
        state.currentRegion = JSON.parse(storedRegion);
      }
    },
  },
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
    // regions
    builder
      .addCase(getRegions.pending, state => {
        state.loading = true;
      })
      .addCase(getRegions.fulfilled, (state, { payload }) => {
        state.loading = false;

        if (payload) {
          state.regions = payload;
          const current = payload.find(region => region.is_default);

          if (current) {
            state.currentRegion = current;
          }
        }
      })
      .addCase(getRegions.rejected, (state, { payload }) => {
        state.loading = false;
        state.assetsError = (payload as DirectusError).errors;
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
          const current = payload.find(city => city.is_default);

          if (current) {
            state.currentCity = current;
          }
        }
      })
      .addCase(getCities.rejected, (state, { payload }) => {
        state.loading = false;
        state.assetsError = (payload as DirectusError).errors;
      });
  },
});

export const {
  setCurrentCity,
  setGeocodedCity,
  setCurrentRegion,
  getSavedCityAndRegion,
} = assetsSlice.actions;
export const assetsReducer = assetsSlice.reducer;
