import { AuthCredentials } from '@directus/sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, Typography } from '@mui/material';
import { InputComponent } from 'app/components';
import { logIn, useAppDispatch } from 'app/store';
import { useForm } from 'react-hook-form';
import { FormModel, schema } from './assets';

export const LoginPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

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

  return (
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
  );
};
