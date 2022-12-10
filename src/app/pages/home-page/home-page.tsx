import { useAppSelector } from 'app/hooks';
import { useAppDispatch, logOut } from 'app/store';
import { Button, Typography } from '@mui/material';

export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { authState, user } = useAppSelector(state => state.auth);

  const logOutHandler = (): void => {
    dispatch(logOut());
  };

  return (
    <>
      <Button onClick={logOutHandler}>Logout</Button>
      {authState === 'succeeded' && user && (
        <Typography>loggedIn: {user.email}</Typography>
      )}
    </>
  );
};
