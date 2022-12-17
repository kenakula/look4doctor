import { Link, List, ListItem } from '@mui/material';
import { HeaderMenu } from 'app/shared/types';
import { NavLink } from 'react-router-dom';

interface Props {
  menu: HeaderMenu[];
}

export const MainNav = ({ menu }: Props): JSX.Element => {
  return (
    <List
      dense
      disablePadding
      sx={{
        display: { xs: 'none', md: 'flex' },
        marginLeft: 'auto',
        alignItems: 'center',
      }}
    >
      {menu
        .filter(({ show_on_page }) => show_on_page)
        .map(({ name, url }) => (
          <ListItem key={url} sx={{ width: 'auto' }}>
            <Link
              sx={{
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
              }}
              color="inherit"
              component={NavLink}
              to={`/${url}`}
            >
              {name}
            </Link>
          </ListItem>
        ))}
    </List>
  );
};
