import {
  MenuItem,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_PAGE, SIGNUP_PAGE } from 'app/router';
import { ColorModeToggler } from './custom-components';
import { ReactComponent as MoonIcon } from 'assets/images/icon-moon.svg';

interface Props {
  closeMenu: () => void;
  toggleColorMode: () => void;
}

export const publicMenu = ({
  closeMenu,
  toggleColorMode,
}: Props): JSX.Element[] => {
  return [
    <MenuItem
      key="login"
      onClick={closeMenu}
      component={NavLink}
      to={LOGIN_PAGE}
    >
      <Typography>Войти</Typography>
    </MenuItem>,
    <MenuItem
      key="signup"
      onClick={closeMenu}
      component={NavLink}
      to={SIGNUP_PAGE}
    >
      <Typography>Регистрация</Typography>
    </MenuItem>,
    <Divider key="divider" />,
    <ColorModeToggler key="theme-toggler" onClick={toggleColorMode}>
      <ListItemIcon>
        <MoonIcon />
      </ListItemIcon>
      <ListItemText primary="Темный режим" />
    </ColorModeToggler>,
  ];
};
