import { RouterComponent } from './router';
import { ThemeStoreProvider } from './store';

export const App = (): JSX.Element => {
  return (
    <div className="app">
      <ThemeStoreProvider>
        <RouterComponent />
      </ThemeStoreProvider>
    </div>
  );
};

export default App;
