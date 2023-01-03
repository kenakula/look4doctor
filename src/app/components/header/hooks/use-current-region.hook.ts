import { SelectChangeEvent } from '@mui/material';
import { ICity } from 'app/shared/types';
import { useState, useEffect } from 'react';

interface HookInterface {
  filteredCities: ICity[];
  currentRegionId: number;
  handleRegionChange: (event: SelectChangeEvent<number>) => void;
}

export const useCurrentRegion = (
  cities: ICity[] | null,
  currentLocation: ICity | null,
): HookInterface => {
  const [currentRegionId, setCurrentRegionId] = useState<number>(0);
  const [filteredCities, setFilteredCities] = useState<ICity[]>(cities ?? []);

  const handleRegionChange = (event: SelectChangeEvent<number>): void => {
    setCurrentRegionId(+event.target.value);

    if (cities) {
      setFilteredCities(
        cities.filter(({ region: { id } }) => id === +event.target.value),
      );
    }
  };

  useEffect(() => {
    if (currentLocation && cities) {
      setCurrentRegionId(currentLocation.region.id);
      setFilteredCities(
        cities.filter(({ region: { id } }) => id === currentLocation.region.id),
      );
    }

    return () => {
      setCurrentRegionId(0);
      setFilteredCities([]);
    };
  }, [currentLocation, cities]);

  return { currentRegionId, filteredCities, handleRegionChange };
};
