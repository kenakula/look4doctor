import React, { useState } from 'react';
import { AppBar, Box, IconButton, Menu, Toolbar } from '@mui/material';
import { useAppSelector } from 'app/hooks';
import { logOut, useAppDispatch, useCustomTheme } from 'app/store';
import DrawerComponent from './drawer-component';
import { Container } from '../container/container';
import { BurgerButton } from './custom-components';
import { Logo } from '../logo/logo';
import { Avatar } from '../avatar/avatar';
import { ActionBlock } from './action-block';
import { MainNav } from './main-nav';
import { authedMenu, publicMenu } from './assets';

export const Header = (): JSX.Element => {
  const { authenticated, user } = useAppSelector(state => state.auth);
  const { settings } = useAppSelector(state => state.assets);
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
          {settings && settings.action_buttons ? (
            <ActionBlock buttons={settings.action_buttons[0]} />
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
            {settings && <MainNav menu={settings.header_menu} />}
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
        menuLinks={settings?.header_menu}
        openState={mobileDrawerOpen}
      />
    </>
  );
};
