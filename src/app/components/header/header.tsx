import { Box, Link, List, ListItem } from '@mui/material';
import { HOME_PAGE, LOGIN_PAGE, SIGNUP_PAGE } from 'app/router';
import { NavLink } from 'react-router-dom';

export const Header = (): JSX.Element => {
  return (
    <Box component="header">
      <Box component="nav">
        <List
          sx={{
            display: 'flex',
            '& .MuiLink-root.active': { opacity: 0.3, pointerEvents: 'none' },
          }}
        >
          <ListItem>
            <Link component={NavLink} to={HOME_PAGE}>
              HOME
            </Link>
          </ListItem>
          <ListItem>
            <Link component={NavLink} to={SIGNUP_PAGE}>
              SIGNUP
            </Link>
          </ListItem>
          <ListItem>
            <Link component={NavLink} to={LOGIN_PAGE}>
              LOGIN
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};
