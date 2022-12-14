import { IUser } from '../types';

export const getUserColorString = (user: IUser | null): string => {
  if (!user) {
    return '';
  }

  const hasNameValues = user.first_name || user.last_name;

  const username = hasNameValues
    ? `${user.first_name} ${user.last_name}`.trim()
    : user.email;

  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < username.length; i += 1) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
};
