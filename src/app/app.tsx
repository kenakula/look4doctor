import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { TechnicalIssues, Loader } from './components';
import { useLocation } from './hooks';
import { RouterComponent } from './router';
import {
  checkAuth,
  refreshAuth,
  setCities,
  setCurrentLocationFromGeo,
  setCurrentLocationFromStorage,
  setRegions,
  ThemeStoreProvider,
  useAppDispatch,
  useGetCitiesQuery,
  useGetRegionsQuery,
  useGetSettingsQuery,
  useGetSpecialtiesQuery,
} from './store';

export const App = (): JSX.Element => {
  const { isLoading: settingsLoading, isError: settingsError } =
    useGetSettingsQuery();
  const { isLoading: specialtiesLoading, isError: specialtiesError } =
    useGetSpecialtiesQuery();
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
    return <TechnicalIssues text="Что-то пошло не так" />;
  }

  return (
    <HelmetProvider>
      <ThemeStoreProvider>
        <RouterComponent />
      </ThemeStoreProvider>
    </HelmetProvider>
  );
};

export default App;
