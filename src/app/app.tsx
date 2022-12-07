import { ThemeStoreProvider } from './store';

export const App = (): JSX.Element => {
  return (
    <ThemeStoreProvider>
      <div className="App">
        <header className="App-header">app</header>
      </div>
    </ThemeStoreProvider>
  );
};

export default App;
