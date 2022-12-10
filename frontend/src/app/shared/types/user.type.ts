export interface IUser {
  id: string;
  first_name?: any;
  last_name?: any;
  email: string;
  password: string;
  location?: any;
  title?: any;
  description?: any;
  tags?: any;
  avatar?: any;
  language?: any;
  theme: string;
  tfa_secret?: any;
  status: string;
  role: string;
  token?: any;
  last_access: Date;
  last_page?: any;
  provider: string;
  external_identifier?: any;
  auth_data?: any;
  email_notifications: boolean;
}
