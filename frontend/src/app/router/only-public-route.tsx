import { Navigate } from 'react-router-dom';
import { HOME_PAGE } from './routes';

interface Props {
  children: JSX.Element;
}

export const OnlyPublicRoute = ({ children }: Props): JSX.Element => {
  const authenticated = false;

  if (authenticated) {
    return <Navigate to={HOME_PAGE} />;
  }

  return children;
};
