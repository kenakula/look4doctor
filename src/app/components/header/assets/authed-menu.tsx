import { Typography, Divider, ListItemIcon, ListItemText } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PROFILE_PAGE } from 'app/router';
import { ColorModeToggler, MenuItemLink } from './custom-components';
import { ReactComponent as MoonIcon } from 'assets/images/icon-moon.svg';

interface Props {
  closeMenu: () => void;
  toggleColorMode: () => void;
  handleLogout: () => void;
}

export const authedMenu = ({
  closeMenu,
  toggleColorMode,
  handleLogout,
}: Props): JSX.Element[] => [
  <MenuItemLink
    key="lk"
    onClick={closeMenu}
    component={NavLink}
    to={PROFILE_PAGE}
  >
    <Typography>Личный кабинет</Typography>
  </MenuItemLink>,
  <MenuItemLink
    key="logout"
    onClick={() => {
      closeMenu();
      handleLogout();
    }}
  >
    <Typography color="error">Выйти</Typography>
  </MenuItemLink>,
  <Divider key="divider" />,
  <ColorModeToggler key="theme-toggler" onClick={toggleColorMode}>
    <ListItemIcon>
      <MoonIcon />
    </ListItemIcon>
    <ListItemText primary="Темный режим" />
  </ColorModeToggler>,
];
