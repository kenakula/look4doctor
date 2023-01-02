import { Box, styled } from '@mui/material';
import { Container, RegionSelect } from 'app/components';

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    columnGap: theme.spacing(2),
    '& .MuiFormControl-root': {
      width: 250,
    },
  },
}));

export const SearchBox = (): JSX.Element => {
  return (
    <Box component="section">
      <Container maxWidth="md">
        <SearchContainer>
          <RegionSelect />
          <span>Input</span>
        </SearchContainer>
      </Container>
    </Box>
  );
};
