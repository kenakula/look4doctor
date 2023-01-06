import { Box, Avatar, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { getImageLink } from 'app/shared/assets';
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
  const avatar = user.avatar
    ? getImageLink(user.avatar, 'user-image.jpg', {
        sizes: { width: 80, height: 80 },
      })
    : undefined;

  return (
    <CustomCard variant="outlined">
      <Box component="header">
        <RatingBox value={rating} />
        <Box>
          <Avatar src={avatar} variant="circular" />
          <Typography variant="body1" color={grey[500]}>
            {user.name}
          </Typography>
        </Box>
      </Box>
      <Typography>{text}</Typography>
    </CustomCard>
  );
};
