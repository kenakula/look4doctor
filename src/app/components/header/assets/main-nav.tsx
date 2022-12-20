import { Link, ListItem, SxProps } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderMenu } from 'app/shared/types';
import { MainNavList } from './custom-components';

interface Props {
  menu: HeaderMenu[];
}

export const MainNav = ({ menu }: Props): JSX.Element => {
  const linkStyle: SxProps = {
    position: 'relative',
    fontSize: 14,
    textDecoration: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      bottom: -7,
      left: 0,
      display: 'none',
      width: '100%',
      height: 3,
      background: '#ffffff',
    },
    '&.active': {
      fontWeight: 700,
      '&::before': {
        display: 'block',
      },
    },
  };

  return (
    <MainNavList dense disablePadding>
      {menu
        .filter(({ show_on_page }) => show_on_page)
        .map(({ name, url }) => (
          <ListItem key={url} sx={{ width: 'auto' }}>
            <Link
              sx={linkStyle}
              color="inherit"
              component={NavLink}
              to={`/${url}`}
            >
              {name}
            </Link>
          </ListItem>
        ))}
    </MainNavList>
  );
};
