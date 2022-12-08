import { HOME_PAGE, PASSWORD_FORGOT_PAGE } from 'app/router';
import { Link } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <header>
      <nav>
        <Link to={HOME_PAGE}>home</Link>
        <Link to={PASSWORD_FORGOT_PAGE}>forgot pass</Link>
      </nav>
    </header>
  );
};
