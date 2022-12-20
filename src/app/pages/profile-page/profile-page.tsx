import { Avatar, Box } from '@mui/material';
import { BASE_DIRECTUS_ASSETS_URL } from 'app/shared/assets';
import { useAppSelector } from 'app/store';

const AVATAR_WIDTH = 500;
const AVATAR_HEIGHT = 500;

export const ProfilePage = (): JSX.Element => {
  const { user } = useAppSelector(state => state.auth);
  const urlParams = `width=${AVATAR_WIDTH}&height=${AVATAR_HEIGHT}`;
  const avatarSrc =
    user && user.avatar
      ? `${BASE_DIRECTUS_ASSETS_URL}/${user.avatar}/avatar.jpg?${urlParams}`
      : undefined;

  return (
    <Box>
      <Avatar sx={{ width: 400, height: 400 }} src={avatarSrc} />
    </Box>
  );
};
