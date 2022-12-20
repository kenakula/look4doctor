import { getDistanceBetweenLocations } from 'app/shared/assets';
import { ICity } from 'app/shared/types';
import { useAppSelector } from 'app/store';
import { useEffect, useMemo, useState } from 'react';

interface IUseLocation {
  currentPosition: GeolocationCoordinates | null;
  closestCity: ICity | null;
  defaultCity: ICity | null | undefined;
}

export const useLocation = (): IUseLocation => {
  const [currentPosition, setCurrentPosition] =
    useState<GeolocationCoordinates | null>(null);
  const [closestCity, setClosestCity] = useState<ICity | null>(null);
  const { cities } = useAppSelector(state => state.location);
  const defaultCity = cities && cities.find(city => city.is_default);

  const citiesMap = useMemo(() => {
    return new Map<ICity, number>();
  }, []);

  useEffect(() => {
    const geocoding = navigator.geolocation;

    geocoding.getCurrentPosition(position => {
      setCurrentPosition(position.coords);
    });
  }, []);

  useEffect(() => {
    if (currentPosition && cities && cities.length) {
      cities.forEach(city => {
        const km = getDistanceBetweenLocations({
          point1: {
            latitude: currentPosition.latitude,
            longitude: currentPosition.longitude,
          },
          point2: {
            latitude: city.coords[0].lat,
            longitude: city.coords[0].lon,
          },
        });

        citiesMap.set(city, km);
      });

      const sorted = Array.from(citiesMap.entries()).sort(
        (a, b) => a[1] - b[1],
      );

      setClosestCity(sorted[0][0]);
    }
  }, [currentPosition, cities, citiesMap]);

  return { currentPosition, closestCity, defaultCity };
};
