import { Avatar as AvatarComponent } from '@mui/material';
import { IUser } from 'app/shared/types';
import {
  BASE_DIRECTUS_ASSETS_URL,
  getAvatarLetters,
  getUserColorString,
} from 'app/shared/assets';
import { useCustomTheme } from 'app/store';

const THUMB_WIDTH = 200;
const THUMB_HEIGHT = 200;

interface Props {
  user: IUser | null;
  alt?: string;
  size?: number;
}

export const Avatar = ({
  user,
  alt = 'аватар пользователя',
  size,
}: Props): JSX.Element => {
  const { theme } = useCustomTheme();
  const urlParams = `width=${THUMB_WIDTH}&height=${THUMB_HEIGHT}`;
  const avatarSrc =
    user && user.avatar
      ? `${BASE_DIRECTUS_ASSETS_URL}/${user.avatar}/avatar.jpg?${urlParams}`
      : undefined;

  return (
    <AvatarComponent
      alt={alt}
      sx={{
        background: getUserColorString(user, theme?.palette.mode),
        width: size,
        height: size,
      }}
      src={avatarSrc}
    >
      {user && getAvatarLetters(user)}
    </AvatarComponent>
  );
};
