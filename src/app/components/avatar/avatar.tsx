import { Avatar as AvatarComponent } from '@mui/material';
import { IUser } from 'app/shared/types';
import { getAvatarLetters, getUserColorString } from 'app/shared/assets';
import { useCustomTheme } from 'app/store';

interface Props {
  user: IUser | null;
  alt?: string;
  size?: number;
}

export const Avatar = ({ user, alt = '', size }: Props): JSX.Element => {
  const { theme } = useCustomTheme();

  return (
    <AvatarComponent
      alt={alt}
      sx={{
        background: getUserColorString(user, theme?.palette.mode),
        width: size,
        height: size,
      }}
      src="/static/images/avatar/2.jpg"
    >
      {user && getAvatarLetters(user)}
    </AvatarComponent>
  );
};
