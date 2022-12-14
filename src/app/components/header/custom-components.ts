import { IconButton, styled } from '@mui/material';

export const BurgerButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(1),
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
