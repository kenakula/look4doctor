import { Avatar, Box } from '@mui/material';
import { getImageLink } from 'app/shared/assets';
import { useAppSelector } from 'app/store';

const AVATAR_SIZE = 200;

export const ProfilePage = (): JSX.Element => {
  const { user } = useAppSelector(state => state.auth);
  const avatarSrc =
    user && user.avatar
      ? getImageLink(user.avatar, 'avatar.jpg', {
          sizes: { width: AVATAR_SIZE, height: AVATAR_SIZE },
        })
      : undefined;

  return (
    <Box>
      <Avatar
        sx={{ width: AVATAR_SIZE, height: AVATAR_SIZE }}
        src={avatarSrc}
      />
    </Box>
  );
};
