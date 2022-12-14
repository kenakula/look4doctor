import { useCallback, useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header } from 'app/components';
import { directus } from 'app/store/assets';
import { LOGIN_PAGE } from 'app/router';
import { useAppSelector } from 'app/hooks';

const AUTH_TOKEN_REFRESH_TIME = 60 * 1000 * 10;

export const Layout = (): JSX.Element => {
  const navigate = useNavigate();
  const { authenticated } = useAppSelector(state => state.auth);
  const [refreshTimeout, setRefreshTimeout] = useState<NodeJS.Timeout | null>(
    null,
  );

  const refreshToken = useCallback(async (): Promise<void> => {
    if (refreshTimeout) {
      clearTimeout(refreshTimeout);
    }

    try {
      await directus.auth.refresh();

      const newTimeout = setTimeout(refreshToken, AUTH_TOKEN_REFRESH_TIME);

      setRefreshTimeout(newTimeout);
    } catch (error) {
      navigate(LOGIN_PAGE);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (authenticated) {
      refreshToken();
    }
  }, [authenticated, refreshToken]);

  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
};
