import { AuthCredentials } from '@directus/sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography, Button } from '@mui/material';
import { InputComponent } from 'app/components';
import { useAppDispatch, signUp } from 'app/store';
import { useForm } from 'react-hook-form';
import { FormModel, schema } from './assets';

export const PasswordForgotPage = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<FormModel>({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormModel) => {
    dispatch(signUp(data));
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h1">ForgotPassword page</Typography>
      <Typography variant="h2">SignUp</Typography>
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
