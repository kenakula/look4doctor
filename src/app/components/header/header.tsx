import React, { useState } from 'react';
import {
  AppBar,
  Box,
  IconButton,
  Menu,
  PopoverOrigin,
  Toolbar,
} from '@mui/material';
import {
  logOut,
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
  useGetSettingsQuery,
} from 'app/store';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { Avatar } from '../avatar/avatar';
import {
  authedMenu,
  BurgerButton,
  DrawerComponent,
  LocationSelector,
  MainNav,
  publicMenu,
} from './assets';

export const Header = (): JSX.Element => {
  const { authenticated, user } = useAppSelector(state => state.auth);
  const { currentLocation } = useAppSelector(state => state.location);
  const { data } = useGetSettingsQuery(null, {
    refetchOnFocus: false,
  });
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);
  const [mobileDrawerOpen, setMobileDrawerOpen] = React.useState(false);
  const dispatch = useAppDispatch();
  const { toggleColorMode } = useCustomTheme();
  const menuAnchor: PopoverOrigin = {
    vertical: 'top',
    horizontal: 'right',
  };

  const handleDrawerToggle = (): void => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (): void => {
    setAnchorElUser(null);
  };

  const handleColorModeClick = (): void => {
    handleCloseUserMenu();

    if (toggleColorMode) {
      toggleColorMode();
    }
  };

  const handleLogout = (): void => {
    dispatch(logOut());
  };

  return (
    <>
      <AppBar position="static" component="header" sx={{ py: 1 }} elevation={0}>
        <Container styles={{ position: 'relative' }}>
          {currentLocation && <LocationSelector location={currentLocation} />}
          <Toolbar disableGutters>
            <BurgerButton
              color="inherit"
              aria-label="Открыть меню"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <span />
            </BurgerButton>
            <Logo />
            {data && <MainNav menu={data.header_menu} />}
            <Box sx={{ ml: 'auto' }}>
              <IconButton
                aria-label="открыть меню"
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar user={user} />
              </IconButton>
              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={menuAnchor}
                keepMounted
                transformOrigin={menuAnchor}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {authenticated
                  ? authedMenu({
                      closeMenu: handleCloseUserMenu,
                      toggleColorMode: handleColorModeClick,
                      handleLogout,
                    })
                  : publicMenu({
                      closeMenu: handleCloseUserMenu,
                      toggleColorMode: handleColorModeClick,
                    })}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerComponent
        handleDrawerToggle={handleDrawerToggle}
        menuLinks={data?.header_menu}
        openState={mobileDrawerOpen}
      />
    </>
  );
};
