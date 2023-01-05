import { Avatar as AvatarComponent } from '@mui/material';
import { IUser } from 'app/shared/types';
import {
  getAvatarLetters,
  getAvatarSrc,
  getUserColorString,
} from 'app/shared/assets';
import { useCustomTheme } from 'app/store';

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
  const avatarSrc =
    user && user.avatar ? getAvatarSrc(100, user.avatar) : undefined;

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
