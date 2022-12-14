import { StatusType } from './status.type';

export interface IRegion {
  id: number;
  name: string;
  status: StatusType;
  is_default: boolean;
}
