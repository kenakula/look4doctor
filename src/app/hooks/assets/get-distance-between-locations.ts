const EARY_RADIUS = 6371;

interface Point {
  latitude: number;
  longitude: number;
}

interface Props {
  point1: Point;
  point2: Point;
}

const degreesToRadians = (deg: number): number => deg * (Math.PI / 180);

export const getDistanceBetweenLocations = ({
  point1,
  point2,
}: Props): number => {
  const deltaLat = degreesToRadians(point2.latitude - point1.latitude);
  const deltaLon = degreesToRadians(point2.longitude - point1.longitude);

  const a =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.cos(degreesToRadians(point1.latitude)) *
      Math.cos(degreesToRadians(point2.latitude)) *
      Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARY_RADIUS * c;
};
