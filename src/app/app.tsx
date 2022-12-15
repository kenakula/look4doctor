import { useEffect, useState } from 'react';
import { Loader } from './components/loader/loader';
import { useGeocoding } from './hooks';
import { RouterComponent } from './router';
import {
  checkAuth,
  getCities,
  getRegions,
  getSettings,
  getSpecialties,
  initAuthStore,
  setGeocodedCity,
  ThemeStoreProvider,
  useAppDispatch,
} from './store';

export const App = (): JSX.Element => {
  const [loading, setLoading] = useState(true);
  const dispatch = useAppDispatch();
  const { closestCity } = useGeocoding();

  useEffect(() => {
    if (closestCity) {
      dispatch(setGeocodedCity(closestCity));
    }
  }, [closestCity, dispatch]);

  useEffect(() => {
    dispatch(initAuthStore());
    dispatch(checkAuth());
  }, [dispatch]);

  useEffect(() => {
    Promise.allSettled([
      dispatch(getSettings()).unwrap(),
      dispatch(getRegions()).unwrap(),
      dispatch(getCities()).unwrap(),
    ]).then(() => {
      setLoading(false);
    });

    dispatch(getSpecialties());
  }, [dispatch]);

  const content = loading ? <Loader size={100} /> : <RouterComponent />;

  return <ThemeStoreProvider>{content}</ThemeStoreProvider>;
};

export default App;
