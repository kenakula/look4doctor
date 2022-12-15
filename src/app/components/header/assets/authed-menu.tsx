import {
  MenuItem,
  Typography,
  Divider,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { PROFILE_PAGE } from 'app/router';
import { ColorModeToggler } from '../custom-components';
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
}: Props): JSX.Element[] => {
  return [
    <MenuItem
      key="lk"
      onClick={closeMenu}
      component={NavLink}
      to={PROFILE_PAGE}
    >
      <Typography>Личный кабинет</Typography>
    </MenuItem>,
    <MenuItem
      key="logout"
      onClick={() => {
        closeMenu();
        handleLogout();
      }}
    >
      <Typography color="error">Выйти</Typography>
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
