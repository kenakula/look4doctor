import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { GlobalSeo, Header, Toaster } from 'app/components';
import { useRefreshToken } from 'app/hooks';

export const Layout = (): JSX.Element => {
  useRefreshToken();

  return (
    <>
      <GlobalSeo />
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
      <Toaster />
    </>
  );
};
