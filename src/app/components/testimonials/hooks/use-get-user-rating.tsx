import StarIcon from '@mui/icons-material/Star';
import { grey } from '@mui/material/colors';
import { useCustomTheme } from 'app/store';

const MAX_VALUE = 5;

interface Star {
  component: JSX.Element;
}

export const useGetRating = (value: number): { stars: Star[] } => {
  const stars: Star[] = [];
  const { theme } = useCustomTheme();

  const getColor = (index: number): string =>
    theme && index <= value ? theme.palette.warning.main : grey[200];

  for (let i = 1; i <= MAX_VALUE; i++) {
    stars.push({ component: <StarIcon key={i} sx={{ fill: getColor(i) }} /> });
  }

  return { stars };
};
