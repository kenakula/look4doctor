import { ListItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderMenu } from 'app/shared/types';
import { MainNavLink, MainNavList } from './custom-components';

interface Props {
  menu: HeaderMenu[];
}

export const MainNav = ({ menu }: Props): JSX.Element => (
  <MainNavList dense disablePadding>
    {menu
      .filter(({ show_on_page }) => show_on_page)
      .map(({ name, url }) => (
        <ListItem key={url} sx={{ width: 'auto' }}>
          <MainNavLink color="inherit" component={NavLink} to={`/${url}`}>
            {name}
          </MainNavLink>
        </ListItem>
      ))}
  </MainNavList>
);
