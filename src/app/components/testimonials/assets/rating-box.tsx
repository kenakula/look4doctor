import { RatingContainer } from './custom-components';
import { useGetRating } from '../hooks';

interface Props {
  value: number;
}

export const RatingBox = ({ value }: Props): JSX.Element => {
  const { stars } = useGetRating(value);

  return <RatingContainer>{stars.map(item => item.component)}</RatingContainer>;
};
