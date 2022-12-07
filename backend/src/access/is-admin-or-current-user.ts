import { Access } from 'payload/config';
import { checkRole } from './check-role';

export const isAdminOrCurrentUser: Access = ({ req: { user } }) => {
  if (checkRole('admin', user)) {
    return true;
  }

  if (user) {
    return {
      email: user.email,
    };
  }

  return false;
};
