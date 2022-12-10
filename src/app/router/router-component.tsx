import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, Layout, LoginPage, SignUpPage } from 'app/pages';
import { HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from './routes';

export const RouterComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={LOGIN_PAGE} element={<LoginPage />} />
          <Route path={SIGNUP_PAGE} element={<SignUpPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
