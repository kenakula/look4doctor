import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  HomePage,
  Layout,
  LoginPage,
  ProfilePage,
  SignUpPage,
} from 'app/pages';
import { HOME_PAGE, LOGIN_PAGE, PROFILE_PAGE, SIGNUP_PAGE } from './routes';
import { OnlyPublicRoute } from './only-public-route';
import { PrivateRoute } from './private-route';

export const RouterComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path={LOGIN_PAGE}
            element={
              <OnlyPublicRoute>
                <LoginPage />
              </OnlyPublicRoute>
            }
          />
          <Route
            path={SIGNUP_PAGE}
            element={
              <OnlyPublicRoute>
                <SignUpPage />
              </OnlyPublicRoute>
            }
          />
          <Route
            path={PROFILE_PAGE}
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path={HOME_PAGE} element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
