import { HomePage, Layout, PasswordForgotPage } from 'app/pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HOME_PAGE, PASSWORD_FORGOT_PAGE } from './routes';

export const RouterComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={HOME_PAGE} element={<HomePage />} />
          <Route path={PASSWORD_FORGOT_PAGE} element={<PasswordForgotPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
