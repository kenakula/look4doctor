import { IconButton, MenuItem, styled } from '@mui/material';

export const BurgerButton = styled(IconButton)(({ theme }) => ({
  position: 'relative',
  marginRight: theme.spacing(1),
  padding: 0,
  width: 48,
  height: 48,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& span:not(.MuiTouchRipple-root)': {
    position: 'relative',
    display: 'block',
    width: 30,
    height: 2,
    backgroundColor: '#ffffff',
    borderRadius: 4,
    '&::before, &::after': {
      content: '""',
      position: 'absolute',
      top: -6,
      left: 0,
      display: 'block',
      width: 30,
      height: 2,
      backgroundColor: '#ffffff',
      borderRadius: 4,
    },
    '&::after': {
      top: 'auto',
      bottom: -6,
    },
  },
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const ColorModeToggler = styled(MenuItem)(({ theme }) => ({
  color:
    theme.palette.mode === 'dark'
      ? theme.palette.warning.main
      : theme.palette.text.primary,
  '& .MuiListItemIcon-root': {
    minWidth: 30,
    color:
      theme.palette.mode === 'dark'
        ? theme.palette.warning.main
        : theme.palette.text.primary,
    '& svg': {
      fill: theme.palette.mode === 'dark' ? theme.palette.warning.main : 'none',
    },
  },
}));
