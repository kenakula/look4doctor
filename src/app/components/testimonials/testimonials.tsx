import { ITestimonialType } from 'app/shared/types';
import { useGetTestimonialsByTypeQuery } from 'app/store';
import { PageTitle } from '../page-title/page-title';
import { SwiperSlide } from 'swiper/react';
import { TestimonialCard } from './assets';
import 'swiper/css';
import 'swiper/css/pagination';
import { Slider } from '../slider/slider';

interface Props {
  type: ITestimonialType;
  title?: string;
}

export const Testimonials = ({ type, title }: Props): JSX.Element => {
  const { isLoading, data } = useGetTestimonialsByTypeQuery(type);

  return (
    <>
      {title && <PageTitle text="Мы помогаем" variant="h2" />}
      {data && !isLoading ? (
        <Slider>
          {data.map(item => (
            <SwiperSlide key={item.id}>
              <TestimonialCard data={item} />
            </SwiperSlide>
          ))}
        </Slider>
      ) : null}
    </>
  );
};
