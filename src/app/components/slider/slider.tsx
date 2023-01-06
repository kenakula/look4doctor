import { Box, styled } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Swiper } from 'swiper/react';
import { Pagination } from 'swiper';
import { useCustomTheme } from 'app/store';

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

interface Props {
  children?: JSX.Element | JSX.Element[];
}

export const Slider = ({ children }: Props): JSX.Element => {
  const { theme } = useCustomTheme();
  const breakpoints = theme && {
    [theme.breakpoints.values.xs]: { slidesPerView: 1, spaceBetween: 16 },
    [theme.breakpoints.values.sm]: { slidesPerView: 2, spaceBetween: 24 },
  };

  return (
    <SliderContainer>
      <Swiper
        spaceBetween={16}
        breakpoints={breakpoints}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        autoHeight
      >
        {children}
      </Swiper>
    </SliderContainer>
  );
};
