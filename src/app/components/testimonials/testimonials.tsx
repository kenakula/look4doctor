import { Box } from '@mui/material';
import { ITestimonialType } from 'app/shared/types';
import { useCustomTheme, useGetTestimonialsByTypeQuery } from 'app/store';
import { PageTitle } from '../page-title/page-title';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { SliderContainer, TestimonialCard } from './assets';
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  type: ITestimonialType;
  title?: string;
}

// TODO вынести компонент слайдера

export const Testimonials = ({ type, title }: Props): JSX.Element => {
  const { isLoading, data } = useGetTestimonialsByTypeQuery(type);
  const { theme } = useCustomTheme();
  const breakpoints = theme && {
    [theme.breakpoints.values.xs]: { slidesPerView: 1, spaceBetween: 16 },
    [theme.breakpoints.values.sm]: { slidesPerView: 2, spaceBetween: 24 },
  };

  return (
    <Box>
      {title && <PageTitle text="Мы помогаем" variant="h2" />}
      <SliderContainer>
        <Swiper
          spaceBetween={16}
          breakpoints={breakpoints}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          autoHeight
        >
          {!isLoading &&
            data &&
            data.map(item => (
              <SwiperSlide key={item.id}>
                <TestimonialCard data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </SliderContainer>
    </Box>
  );
};
