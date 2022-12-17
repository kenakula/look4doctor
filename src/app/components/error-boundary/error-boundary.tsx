import { Typography } from '@mui/material';
import { CustomPaper } from './assets';

interface Props {
  text: string | string[];
  advice?: string;
}

export const ErrorBoundary = ({
  text,
  advice = 'Попробуйте позже',
}: Props): JSX.Element => {
  return (
    <CustomPaper variant="outlined">
      <Typography variant="h3" color="error" textAlign="center">
        Произошла ошибка
      </Typography>
      {Array.isArray(text) ? (
        text.map(value => (
          <Typography
            sx={{ opacity: 0.5 }}
            key={value}
            variant="body1"
            textAlign="center"
          >
            {`"${value}"`}
          </Typography>
        ))
      ) : (
        <Typography textAlign="center" variant="body1">
          {text}
        </Typography>
      )}
      <Typography variant="h5" textAlign="center">
        {advice}
      </Typography>
    </CustomPaper>
  );
};
