import { Box, CircularProgress } from '@mui/material';

interface Props {
  size?: number;
}

export const Loader = ({ size = 20 }: Props): JSX.Element => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      <CircularProgress size={size} color="primary" />
    </Box>
  );
};
