import { Typography } from '@mui/material';
import { HOME_PAGE } from 'app/router';
import { NavLink } from 'react-router-dom';

export const Logo = (): JSX.Element => {
  return (
    <Typography
      variant="body1"
      noWrap
      component={NavLink}
      to={HOME_PAGE}
      sx={{
        mr: 2,
        flexShrink: 0,
        fontSize: 24,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
    >
      LOGO
    </Typography>
  );
};
