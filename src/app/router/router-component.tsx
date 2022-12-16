import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import {
  ClinicsPage,
  ContactsPage,
  DoctorsPage,
  HomePage,
  InsurancePage,
  Layout,
  LoginPage,
  ProfilePage,
  ServicesPage,
  SignUpPage,
  TelemedPage,
} from 'app/pages';
import {
  CLINICS_PAGE,
  CONTACTS_PAGE,
  DOCTORS_PAGE,
  HOME_PAGE,
  INSURANCE_PAGE,
  LOGIN_PAGE,
  PROFILE_PAGE,
  SERVICES_PAGE,
  SIGNUP_PAGE,
  TELEMED_PAGE,
} from './routes';
import { OnlyPublicRoute } from './only-public-route';
import { PrivateRoute } from './private-route';
import { Loader } from 'app/components';

export const RouterComponent = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
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
            <Route path={SERVICES_PAGE} element={<ServicesPage />} />
            <Route path={CLINICS_PAGE} element={<ClinicsPage />} />
            <Route path={DOCTORS_PAGE} element={<DoctorsPage />} />
            <Route path={CONTACTS_PAGE} element={<ContactsPage />} />
            <Route path={INSURANCE_PAGE} element={<InsurancePage />} />
            <Route path={TELEMED_PAGE} element={<TelemedPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
