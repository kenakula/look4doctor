import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from 'app/components';
import { useRefreshToken } from 'app/hooks';

export const Layout = (): JSX.Element => {
  useRefreshToken();

  return (
    <>
      <Header />
      <Box component="main">
        <Outlet />
      </Box>
    </>
  );
};
