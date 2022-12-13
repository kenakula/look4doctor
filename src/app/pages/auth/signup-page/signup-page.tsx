import { useForm } from 'react-hook-form';
import { AuthCredentials } from '@directus/sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography, Button } from '@mui/material';
import { InputComponent } from 'app/components';
import { useAppDispatch, signUp, checkAuth } from 'app/store';
import { FormModel, schema } from './assets';

export const SignUpPage = (): JSX.Element => {
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
    dispatch(signUp(data))
      .unwrap()
      .then(() => {
        dispatch(checkAuth());
      });
  };

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
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
