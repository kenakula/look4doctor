import React, { useState } from 'react';
import { AppBar, Box, IconButton, Menu, Toolbar } from '@mui/material';
import {
  logOut,
  useAppDispatch,
  useAppSelector,
  useCustomTheme,
} from 'app/store';
import { Container } from '../container/container';
import { Logo } from '../logo/logo';
import { Avatar } from '../avatar/avatar';
import {
  ActionBlock,
  authedMenu,
  BurgerButton,
  DrawerComponent,
  LocationSelector,
  MainNav,
  publicMenu,
} from './assets';
import { useGetSettingsQuery } from 'app/store/assets-slice/assets.api';

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
          {data && data.action_buttons ? (
            <ActionBlock buttons={data.action_buttons[0]} />
          ) : null}
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
