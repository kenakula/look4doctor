import { Typography, Divider, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { LOGIN_PAGE, SIGNUP_PAGE } from 'app/router';
import { ColorModeToggler, MenuItemLink } from './custom-components';
import { ReactComponent as MoonIcon } from 'assets/images/icon-moon.svg';

interface Props {
  closeMenu: () => void;
  toggleColorMode: () => void;
}

export const publicMenu = ({
  closeMenu,
  toggleColorMode,
}: Props): JSX.Element[] => [
  <MenuItemLink
    key="login"
    onClick={closeMenu}
    component={NavLink}
    to={LOGIN_PAGE}
  >
    <Typography>Войти</Typography>
  </MenuItemLink>,
  <MenuItemLink
    key="signup"
    onClick={closeMenu}
    component={NavLink}
    to={SIGNUP_PAGE}
  >
    <Typography>Регистрация</Typography>
  </MenuItemLink>,
  <Divider key="divider" />,
  <ColorModeToggler key="theme-toggler" onClick={toggleColorMode}>
    <ListItemIcon>
      <MoonIcon />
    </ListItemIcon>
    <ListItemText primary="Темный режим" />
  </ColorModeToggler>,
];
