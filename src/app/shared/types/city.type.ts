import { IRegion } from './regon.type';
import { StatusType } from './status.type';

export interface ICity {
  id: string;
  status: StatusType;
  name: string;
  slug: string;
  region: IRegion;
  is_default: boolean;
}
