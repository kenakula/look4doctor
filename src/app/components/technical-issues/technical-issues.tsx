import { Paper, styled, Typography } from '@mui/material';

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

interface Props {
  text: string;
  advice?: string;
}

export const TechnicalIssues = ({
  text,
  advice = 'Попробуйте позже',
}: Props): JSX.Element => {
  return (
    <CustomPaper variant="outlined">
      <Typography variant="h3" color="error" textAlign="center">
        Произошла ошибка
      </Typography>
      <Typography textAlign="center" variant="body1" sx={{ opacity: 0.5 }}>
        {text}
      </Typography>
      <Typography variant="h5" component="p" textAlign="center">
        {advice}
      </Typography>
    </CustomPaper>
  );
};
