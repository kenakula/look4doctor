import { User } from '../payload-types';

export const checkRole = (checkFor: string, user?: User): boolean => {
  if (user) {
    return user.role === checkFor;
  }

  return false;
};
