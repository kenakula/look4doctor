import { Typography } from '@mui/material';
import { useAppSelector } from './hooks';
import { RouterComponent } from './router';
import { ThemeStoreProvider } from './store';

export const App = (): JSX.Element => {
  const { authState, authError } = useAppSelector(state => state.auth);

  if (authState === 'pending') {
    return <Typography variant="h1">Loading ...</Typography>;
  }

  if (authState === 'failed') {
    return (
      <Typography variant="h1" color="error">
        Error: {authError}
      </Typography>
    );
  }

  return (
    <div className="app">
      <ThemeStoreProvider>
        <RouterComponent />
      </ThemeStoreProvider>
    </div>
  );
};

export default App;
