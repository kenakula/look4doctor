import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { Header } from 'app/components';
import { useAppSelector } from 'app/hooks';

export const Layout = (): JSX.Element => {
  const { authState } = useAppSelector(state => state.auth);

  return (
    <>
      <Header />
      <Box className={authState ? 'succeed' : ''}>
        <Outlet />
      </Box>
    </>
  );
};
