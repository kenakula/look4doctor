import { styled } from '@mui/material';

export const LoadingIcon = styled('span')({
  '@keyframes rotating': {
    from: {
      transform: 'rotate(0deg)',
    },
    to: {
      transform: 'rotate(360deg)',
    },
  },
  width: 24,
  height: 24,
  svg: {
    animation: 'rotating 1s infinite linear',
    transformOrigin: 'center center',
  },
});
