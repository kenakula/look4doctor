import { Paper, styled } from '@mui/material';

export const CustomPaper = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '20px',
  width: '100%',
  maxWidth: 300,
  [theme.breakpoints.up('md')]: {
    maxWidth: 500,
  },
}));
