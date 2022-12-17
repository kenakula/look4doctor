/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_PAGE } from 'app/router';
import { directus } from 'app/store/assets';
import { useAppSelector } from 'app/store';

const AUTH_TOKEN_REFRESH_TIME = 60 * 1000 * 10;

export const useRefreshToken = (): void => {
  const navigate = useNavigate();
  const { authenticated } = useAppSelector(state => state.auth);
  const [refreshTimeout, setRefreshTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);

  const refreshToken = useCallback(async (): Promise<void> => {
    try {
      await directus.auth.refresh();

      const newTimeout = setTimeout(refreshToken, AUTH_TOKEN_REFRESH_TIME);

      setRefreshTimeout(newTimeout);
    } catch (error) {
      navigate(LOGIN_PAGE);
    }
  }, []);

  useEffect(() => {
    if (authenticated) {
      refreshToken();
    } else {
      clearTimeout(refreshTimeout);
    }

    return () => {
      clearTimeout(refreshTimeout);
    };
  }, [authenticated, refreshToken]);
};
