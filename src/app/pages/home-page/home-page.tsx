import { AuthCredentials } from '@directus/sdk';
import { useAppSelector } from 'app/hooks';
import { useAppDispatch, logIn, checkAuth, logOut } from 'app/store';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { InputComponent } from 'app/components';
import { FormModel, schema } from './assets';

export const HomePage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { authState, user } = useAppSelector(state => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormModel>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormModel): void => {
    dispatch(logIn(data));
  };

  const logOutHandler = (): void => {
    dispatch(logOut());
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h2">Login</Typography>
        <InputComponent<AuthCredentials>
          formControl={control}
          error={!!errors.email}
          errorMessage="Введите корректно почту"
          type="email"
          name="email"
          label="email"
          styles={{ marginRight: '10px' }}
        />
        <InputComponent<AuthCredentials>
          formControl={control}
          error={!!errors.password}
          errorMessage="Введите пароль"
          type="password"
          name="password"
          label="password"
          styles={{ marginRight: '10px' }}
        />
        <Button type="submit">Submit</Button>
      </Box>
      <Button onClick={logOutHandler}>Logout</Button>
      {authState === 'succeeded' && user && (
        <Typography>loggedIn: {user.email}</Typography>
      )}
    </>
  );
};
