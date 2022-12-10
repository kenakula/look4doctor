import { Geo } from './get.type';
import { Worktime } from './worktime.type';

export interface IClinic {
  id: number;
  name: string;
  worktime: Worktime[];
  region: number;
  city: number;
  address: string;
  geo: Geo;
}
