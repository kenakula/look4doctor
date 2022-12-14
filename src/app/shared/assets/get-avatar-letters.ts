import { IUser } from '../types';

export const getAvatarLetters = (user: IUser | null): string => {
  if (!user) {
    return '';
  }

  const hasNameValues = user.first_name || user.last_name;

  const username = hasNameValues
    ? `${user.first_name} ${user.last_name}`.trim()
    : user.email;

  const str = username
    .split(' ')
    .map((word: string, index: number, array: string[]) => {
      if (array.length === 1) {
        return word[0].toUpperCase() + word[1].toUpperCase();
      }

      return word[0].toUpperCase();
    })
    .join('');

  return str;
};
