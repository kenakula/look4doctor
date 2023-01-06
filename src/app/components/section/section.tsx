import { Box } from '@mui/material';
import { Container } from '../container/container';

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const Section = ({ children }: Props): JSX.Element => {
  return (
    <Box component="section" sx={{ py: 4 }}>
      <Container maxWidth="md">{children}</Container>
    </Box>
  );
};
