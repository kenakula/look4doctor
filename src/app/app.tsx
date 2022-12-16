import { useEffect } from 'react';
import { useLocation } from './hooks';
import { RouterComponent } from './router';
import {
  checkAuth,
  getSettings,
  getSpecialties,
  initAuthStore,
  ThemeStoreProvider,
  useAppDispatch,
} from './store';
import {
  setCurrentLocationFromGeo,
  setCurrentLocationFromStorage,
} from './store/location-slice/location.slice';
import { getRegions, getCities } from './store/location-slice/location.thunks';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { closestCity, defaultCity } = useLocation();

  useEffect(() => {
    dispatch(initAuthStore());
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    Promise.allSettled([
      dispatch(getSettings()).unwrap(),
      dispatch(getRegions()).unwrap(),
      dispatch(getCities()).unwrap(),
    ]);

    dispatch(getSpecialties());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentLocationFromStorage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentLocationFromGeo(closestCity));
  }, [dispatch, closestCity, defaultCity]);

  return (
    <ThemeStoreProvider>
      <RouterComponent />
    </ThemeStoreProvider>
  );
};

export default App;
