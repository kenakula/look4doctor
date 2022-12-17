import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { assetsApi } from './assets-slice/assets.api';
import { authReducer } from './auth-slice/auth.slice';
import { locationApi } from './location-slice';
import { locationReducer } from './location-slice/location.slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [assetsApi.reducerPath]: assetsApi.reducer,
    location: locationReducer,
    [locationApi.reducerPath]: locationApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(assetsApi.middleware, locationApi.middleware),
});

setupListeners(store.dispatch);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
