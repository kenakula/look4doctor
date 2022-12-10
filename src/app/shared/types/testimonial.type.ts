import { IUser } from './user.type';

export interface ITestimonial {
  status: 'draft' | 'published';
  id?: string;
  author: IUser;
  title: string;
  description?: string;
  rating: number;
}
