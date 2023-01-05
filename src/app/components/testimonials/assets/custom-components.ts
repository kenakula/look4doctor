import { Box, Paper, styled } from '@mui/material';
import { grey } from '@mui/material/colors';

export const SliderContainer = styled(Box)(({ theme }) => ({
  marginLeft: `-${theme.spacing(2)}`,
  marginRight: `-${theme.spacing(2)}`,
  '.swiper': {
    padding: theme.spacing(2, 2, 4),
  },
  '.swiper-pagination': {
    bottom: 0,
  },
  '.swiper-pagination-bullet': {
    background: grey[500],
  },
  '.swiper-pagination-bullet-active': {
    background: theme.palette.primary.main,
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: `-${theme.spacing(3)}`,
    marginRight: `-${theme.spacing(3)}`,
    '.swiper': {
      paddingLeft: theme.spacing(3),
      paddingRight: theme.spacing(3),
    },
  },
}));

export const CustomCard = styled(Paper, { label: 'testimonial-card' })(
  ({ theme }) => ({
    padding: theme.spacing(0, 2, 2),
    '& header': {
      '.MuiBox-root': {
        display: 'flex',
        alignItems: 'center',
      },
      marginBottom: theme.spacing(2),
      '.MuiAvatar-root': {
        marginRight: theme.spacing(1),
      },
    },
  }),
) as typeof Paper;

export const RatingContainer = styled(Box, { label: 'rating' })(
  ({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2, 0, 1),
  }),
);
