import { useForm } from 'react-hook-form';
import { AuthCredentials } from '@directus/sdk';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Typography, Button } from '@mui/material';
import { Container, InputComponent } from 'app/components';
import {
  useAppDispatch,
  signUp,
  checkAuth,
  useAppSelector,
  setToaster,
} from 'app/store';
import { FormModel, schema } from './assets';
import LoginIcon from '@mui/icons-material/Login';
import SyncIcon from '@mui/icons-material/Sync';
import { LoadingIcon } from 'app/shared/assets';

export const SignUpPage = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const { authProcessing } = useAppSelector(state => state.auth);

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
      })
      .catch(err => {
        dispatch(
          setToaster({
            message: err,
            severety: 'error',
            key: new Date().getTime(),
          }),
        );
      });
  };

  return (
    <Container maxWidth="xs" styles={{ padding: 0 }}>
      <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ py: 4 }}>
        <Typography variant="h2" sx={{ fontSize: 32, mb: 2, fontWeight: 700 }}>
          SignUp
        </Typography>
        <InputComponent<AuthCredentials>
          formControl={control}
          error={!!errors.email}
          errorMessage="Введите корректно почту"
          type="email"
          name="email"
          label="email"
          variant="standard"
          fullwidth
          styles={{ margin: '0 0 20px 0' }}
        />
        <InputComponent<AuthCredentials>
          formControl={control}
          error={!!errors.password}
          errorMessage="Введите пароль"
          type="password"
          name="password"
          label="password"
          variant="standard"
          fullwidth
          styles={{ margin: '0 0 20px 0' }}
        />
        <Button
          type="submit"
          variant="contained"
          startIcon={
            authProcessing ? (
              <LoadingIcon>
                <SyncIcon />
              </LoadingIcon>
            ) : (
              <LoginIcon />
            )
          }
          disabled={authProcessing}
        >
          Регистрация
        </Button>
      </Box>
    </Container>
  );
};
