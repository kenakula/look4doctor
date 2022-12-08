import React, { useEffect } from 'react';
import { RouterComponent } from './router';
import { ThemeStoreProvider } from './store';

const sanityUrl = process.env.REACT_APP_SANITY_URL;

export const App = (): JSX.Element => {
  useEffect(() => {
    fetch(`${sanityUrl}?query=*[_type=="post"]`)
      .then(res => res.json())
      .then(res => console.log(res));
  }, []);

  return (
    <div className="app">
      <ThemeStoreProvider>
        <RouterComponent />
      </ThemeStoreProvider>
    </div>
  );
};

export default App;
