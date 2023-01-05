import { Box, Avatar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { getAvatarSrc } from 'app/shared/assets';
import { ITestimonial } from 'app/shared/types';
import { CustomCard } from './custom-components';
import { RatingBox } from './rating-box';

interface Props {
  data: ITestimonial;
}

export const TestimonialCard = ({
  data: { author, text, rating },
}: Props): JSX.Element => {
  const user = author[0];

  return (
    <CustomCard variant="outlined">
      <Box component="header">
        <RatingBox value={rating} />
        <Box>
          <Avatar src={getAvatarSrc(100, user.avatar)} variant="circular" />
          <Typography variant="body1" color={grey[500]}>
            {user.name}
          </Typography>
        </Box>
      </Box>
      <Typography>{text}</Typography>
    </CustomCard>
  );
};
