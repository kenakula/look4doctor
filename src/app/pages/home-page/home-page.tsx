import { useAppDispatch, logOut } from 'app/store';
import { Button } from '@mui/material';

export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const logOutHandler = (): void => {
    dispatch(logOut());
  };

  return (
    <>
      <Button onClick={logOutHandler}>Logout</Button>
    </>
  );
};
