import React, { useState } from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from 'app/hooks';
import { HOME_PAGE, LOGIN_PAGE, PROFILE_PAGE, SIGNUP_PAGE } from 'app/router';
import { logOut, useAppDispatch } from 'app/store';

const pages = [
  { name: 'Врачи', url: '/doctors' },
  { name: 'Клиники', url: '/clinics' },
  { name: 'Услуги', url: '/services' },
];
const drawerWidth = 240;

export const Header = (): JSX.Element => {
  const { authenticated, user } = useAppSelector(state => state.auth);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Look4Doctor
      </Typography>
      <Divider />
      <List>
        {pages.map(({ name, url }) => (
          <ListItem key={url} disablePadding>
            <ListItemButton
              sx={{ textAlign: 'center' }}
              component={NavLink}
              to={url}
            >
              <ListItemText primary={name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const authControls = (
    <Box sx={{ ml: 'auto' }}>
      <Button
        color="inherit"
        variant="outlined"
        sx={{ mr: 1 }}
        component={NavLink}
        to={LOGIN_PAGE}
      >
        Войти
      </Button>
      <Button
        color="inherit"
        variant="text"
        component={NavLink}
        to={SIGNUP_PAGE}
      >
        Регистрация
      </Button>
    </Box>
  );

  const menuElement = (
    <Box className="user-menu" sx={{ ml: 'auto' }}>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
      </IconButton>
      <Menu
        sx={{ mt: '45px' }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <MenuItem
          onClick={handleCloseUserMenu}
          component={NavLink}
          to={PROFILE_PAGE}
        >
          <Typography textAlign="center">Личный кабинет</Typography>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleCloseUserMenu();
            dispatch(logOut());
          }}
        >
          <Typography textAlign="center">Выйти</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );

  return (
    <>
      <AppBar position="static" component="nav" className="desctop-nav">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component={NavLink}
              to={HOME_PAGE}
              sx={{
                mr: 2,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box
              sx={{ display: { xs: 'none', sm: 'block' }, marginLeft: 'auto' }}
            >
              {pages.map(({ name, url }) => (
                <Button
                  key={url}
                  sx={{ color: '#fff', '&.active': { opacity: 0.3 } }}
                  component={NavLink}
                  to={url}
                >
                  {name}
                </Button>
              ))}
            </Box>

            {user && authenticated ? menuElement : authControls}
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav" className="mobile-nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};
