import { Typography } from '@mui/material';
import { RegionSelect } from 'app/components';

export const HomePage = (): JSX.Element => {
  return (
    <>
      <Typography variant="h1">Home page</Typography>
      <RegionSelect />
    </>
  );
};
