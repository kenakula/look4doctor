import { useEffect } from 'react';
import { RouterComponent } from './router';
import { checkAuth, ThemeStoreProvider, useAppDispatch } from './store';

export const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  return (
    <div className="app">
      <ThemeStoreProvider>
        <RouterComponent />
      </ThemeStoreProvider>
    </div>
  );
};

export default App;
