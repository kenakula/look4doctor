import { PaletteMode } from '@mui/material';
import { IUser } from '../types';

const newShade = (color: string, magnitude: number): string => {
  const hexColor = color.replace('#', '');
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);

    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  }

  return hexColor;
};

export const getUserColorString = (
  user: IUser | null,
  themeMode: PaletteMode | undefined,
): string => {
  if (!user) {
    return '';
  }

  const hasNameValues = user.first_name || user.last_name;

  const username = hasNameValues
    ? `${user.first_name} ${user.last_name}`.trim()
    : user.email;

  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < username.length; i += 1) {
    hash = username.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.substr(-2);
  }
  /* eslint-enable no-bitwise */

  return themeMode === 'light' ? color : newShade(color, 50);
};
