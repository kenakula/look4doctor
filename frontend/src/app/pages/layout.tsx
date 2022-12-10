import { Header } from 'app/components';
import { useAppSelector } from 'app/hooks';
import { Outlet } from 'react-router-dom';

export const Layout = (): JSX.Element => {
  const { authState } = useAppSelector(state => state.auth);

  return (
    <>
      <Header />
      <main className={authState ? 'succeed' : ''}>
        <Outlet />
      </main>
    </>
  );
};
