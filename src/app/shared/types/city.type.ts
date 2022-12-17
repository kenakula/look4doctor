import { IRegion } from './regon.type';
import { StatusType } from './status.type';

interface CityCoords {
  lat: number;
  lon: number;
}

export interface ICity {
  id: number;
  status: StatusType;
  name: string;
  slug: string;
  region: IRegion;
  is_default: boolean;
  coords: CityCoords[];
}
