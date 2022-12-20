import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { assetsApi } from './assets-slice';
import { authReducer } from './auth-slice';
import { locationApi, locationReducer } from './location-slice';
import { toasterReducer } from './toaster-slice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    location: locationReducer,
    toaster: toasterReducer,
    [locationApi.reducerPath]: locationApi.reducer,
    [assetsApi.reducerPath]: assetsApi.reducer,
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
