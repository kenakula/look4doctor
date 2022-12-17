import { Avatar, Box } from '@mui/material';
import { useAppSelector } from 'app/store';

export const ProfilePage = (): JSX.Element => {
  const { user } = useAppSelector(state => state.auth);

  return (
    <Box>
      <Avatar
        sx={{ width: 200, height: 200 }}
        src={
          user && user.avatar
            ? `https://asw9h040.directus.app/assets/${user.avatar}/avatar.jpg`
            : undefined
        }
      />
    </Box>
  );
};
