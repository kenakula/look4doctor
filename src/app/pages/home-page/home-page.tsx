import { Typography } from '@mui/material';
import { RegionSelect } from 'app/components';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Typography variant="h1" color="success.light">
        Home page
      </Typography>
      <RegionSelect />
    </>
  );
};
