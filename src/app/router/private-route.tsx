import { useAppSelector } from 'app/hooks';
import { Navigate, useLocation } from 'react-router-dom';
import { LOGIN_PAGE } from './routes';

interface Props {
  children: JSX.Element;
}

export const PrivateRoute = ({ children }: Props): JSX.Element => {
  const location = useLocation();
  const { authenticated } = useAppSelector(state => state.auth);

  if (!authenticated) {
    // Redirect users to the login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to={LOGIN_PAGE} state={{ from: location }} replace />;
  }

  return children;
};
