import { useEffect } from 'react';
import { ErrorBoundary, Loader } from './components';
import { useLocation } from './hooks';
import { RouterComponent } from './router';
import {
  checkAuth,
  refreshAuth,
  ThemeStoreProvider,
  useAppDispatch,
} from './store';
import {
  useGetSettingsQuery,
  useGetSpecialtiesQuery,
} from './store/assets-slice';
import { useGetCitiesQuery, useGetRegionsQuery } from './store/location-slice';
import {
  setCities,
  setCurrentLocationFromGeo,
  setCurrentLocationFromStorage,
  setRegions,
} from './store/location-slice/location.slice';

export const App = (): JSX.Element => {
  const { isLoading: settingsLoading, isError: settingsError } =
    useGetSettingsQuery(null, {
      refetchOnFocus: false,
    });
  const { isLoading: specialtiesLoading, isError: specialtiesError } =
    useGetSpecialtiesQuery(null, { refetchOnFocus: false });
  const { data: cities } = useGetCitiesQuery(null, { refetchOnFocus: false });
  const { data: regions } = useGetRegionsQuery('', { refetchOnFocus: false });

  const dispatch = useAppDispatch();
  let ignoreAuth = false;
  const { closestCity, defaultCity } = useLocation();

  useEffect(() => {
    if (!ignoreAuth) {
      dispatch(checkAuth())
        .unwrap()
        .catch(() => {
          dispatch(refreshAuth());
        });

      // eslint-disable-next-line react-hooks/exhaustive-deps
      ignoreAuth = true;
    }
  }, []);

  useEffect(() => {
    if (cities && regions) {
      dispatch(setCities(cities));
      dispatch(setRegions(regions));
    }
  }, [cities, regions, dispatch]);

  useEffect(() => {
    dispatch(setCurrentLocationFromStorage());
  }, [dispatch]);

  useEffect(() => {
    dispatch(setCurrentLocationFromGeo(closestCity));
  }, [closestCity, defaultCity, dispatch]);

  if (settingsLoading || specialtiesLoading) {
    return <Loader size={100} />;
  }

  if (settingsError || specialtiesError) {
    return <ErrorBoundary text="Что-то пошло не так, попробуйте позже" />;
  }

  return (
    <ThemeStoreProvider>
      <RouterComponent />
    </ThemeStoreProvider>
  );
};

export default App;
