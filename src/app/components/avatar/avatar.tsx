import { Avatar as AvatarComponent } from '@mui/material';
import { IUser } from 'app/shared/types';
import {
  getAvatarLetters,
  getImageLink,
  getUserColorString,
} from 'app/shared/assets';
import { useCustomTheme } from 'app/store';

const DEFAULT_IMAGE_SIZE = 80;

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
  const avatarDiameter = size ?? DEFAULT_IMAGE_SIZE;
  const avatarSrc =
    user && user.avatar
      ? getImageLink(user.avatar, 'user-avatar.jpg', {
          sizes: { width: avatarDiameter, height: avatarDiameter },
        })
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
