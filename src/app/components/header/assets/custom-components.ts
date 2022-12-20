import {
  Box,
  Button,
  Dialog,
  Drawer,
  IconButton,
  List,
  ListItem,
  MenuItem,
  styled,
} from '@mui/material';

const DRAWER_WIDTH = 240;

export const MainNavList = styled(List)(({ theme }) => ({
  display: 'none',
  marginLeft: 'auto',
  alignItems: 'center',
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}));

export const BurgerButton = styled(IconButton, { label: 'burger-toggler' })(
  ({ theme }) => ({
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
  }),
);

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

export const ActionBlockWrapper = styled(Box, { label: 'action-block' })({
  position: 'absolute',
  right: 24,
  bottom: '-100%',
  display: 'flex',
  columnGap: '10px',
});

export const LocationButton = styled(Button, { label: 'location-button' })({
  display: 'flex',
  alignItems: 'center',
  fontSize: 12,
  textTransform: 'none',
  svg: {
    width: 15,
    height: 15,
  },
});

export const LocationDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiPaper-root': {
    width: '100%',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
  '& .MuiDialogTitle-root': {
    display: 'flex',
    flexDirection: 'column',
  },
}));

export const LocationsList = styled(List)(({ theme }) => ({
  display: 'grid',
  columnGap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr',
  },
}));

export const LocationListItem = styled(ListItem, {
  shouldForwardProp: prop => prop !== 'current',
})<{ current: boolean }>(({ theme, current }) => ({
  pointerEvents: current ? 'none' : undefined,
  opacity: current ? 0.5 : 1,
  '& .MuiListItemIcon-root': {
    display: current ? undefined : 'none',
    color: theme.palette.primary.main,
  },
}));

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    boxSizing: 'border-box',
    width: DRAWER_WIDTH,
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
