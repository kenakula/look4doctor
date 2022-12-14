import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useAppSelector } from 'app/hooks';
import { LOGIN_PAGE, PROFILE_PAGE, SIGNUP_PAGE } from 'app/router';
import { logOut, useAppDispatch } from 'app/store';
import DrawerComponent from './drawer-component';
import { Container } from '../container/container';
import { BurgerButton } from './custom-components';
import { Logo } from '../logo/logo';
import { Avatar } from '../avatar/avatar';

const drawerWidth = 240;

export const Header = (): JSX.Element => {
  const { authenticated, user } = useAppSelector(state => state.auth);
  const { settings } = useAppSelector(state => state.assets);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleDrawerToggle = (): void => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const authedMenu = [
    <MenuItem
      key="lk"
      onClick={handleCloseUserMenu}
      component={NavLink}
      to={PROFILE_PAGE}
    >
      <Typography>Личный кабинет</Typography>
    </MenuItem>,
    <MenuItem
      key="logout"
      onClick={() => {
        handleCloseUserMenu();
        dispatch(logOut());
      }}
    >
      <Typography>Выйти</Typography>
    </MenuItem>,
  ];

  const publicMenu = [
    <MenuItem
      key="login"
      onClick={handleCloseUserMenu}
      component={NavLink}
      to={LOGIN_PAGE}
    >
      <Typography>Войти</Typography>
    </MenuItem>,
    <MenuItem
      key="signup"
      onClick={handleCloseUserMenu}
      component={NavLink}
      to={SIGNUP_PAGE}
    >
      <Typography>Регистрация</Typography>
    </MenuItem>,
  ];

  return (
    <>
      <AppBar position="static" component="header" sx={{ py: 1 }} elevation={0}>
        <Container>
          <Toolbar disableGutters>
            <BurgerButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </BurgerButton>
            <Logo />
            <List
              dense
              disablePadding
              sx={{
                display: { xs: 'none', md: 'flex' },
                marginLeft: 'auto',
                alignItems: 'center',
              }}
            >
              {settings &&
                settings.header_menu
                  .filter(({ show_on_page }) => show_on_page)
                  .map(({ name, url }) => (
                    <ListItem key={url} sx={{ width: 'auto' }}>
                      <Link
                        sx={{ fontSize: 14, textDecoration: 'none' }}
                        color="inherit"
                        component={NavLink}
                        to={`/${url}`}
                      >
                        {name}
                      </Link>
                    </ListItem>
                  ))}
            </List>

            <Box sx={{ ml: 'auto' }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar user={user} />
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
                {authenticated ? authedMenu : publicMenu}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Box component="nav" className="mobile-nav">
        <Drawer
          variant="temporary"
          open={mobileDrawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <DrawerComponent
            handleDrawerToggle={handleDrawerToggle}
            menuLinks={settings?.header_menu}
          />
        </Drawer>
      </Box>
    </>
  );
};
