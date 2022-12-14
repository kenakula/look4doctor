import { Avatar as AvatarComponent } from '@mui/material';
import { IUser } from 'app/shared/types';
import { getAvatarLetters, getUserColorString } from 'app/shared/assets';

interface Props {
  user: IUser | null;
  alt?: string;
  size?: number;
}

export const Avatar = ({ user, alt = '', size }: Props): JSX.Element => {
  return (
    <AvatarComponent
      alt={alt}
      sx={{
        background: getUserColorString(user),
        width: size,
        height: size,
      }}
      src="/static/images/avatar/2.jpg"
    >
      {user && getAvatarLetters(user)}
    </AvatarComponent>
  );
};
