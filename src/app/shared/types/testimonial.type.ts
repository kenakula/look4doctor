import { StatusType } from './status.type';

export type ITestimonialType = 'app' | 'doctor' | 'clinic' | 'insurance';

export interface TestimonialAuthor {
  id: string;
  name: string;
  avatar?: string;
}

export interface ITestimonial {
  id: string;
  status: StatusType;
  author: TestimonialAuthor[];
  user_created: string;
  date_created: Date;
  text: string;
  rating: number;
  type: ITestimonialType;
  doctor: string | null;
  clinic: string | null;
  insurance: string | null;
}
