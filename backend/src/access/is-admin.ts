import { Access } from 'payload/config';
import { checkRole } from './check-role';

export const isAdmin: Access = ({ req: { user } }) => checkRole('admin', user);
