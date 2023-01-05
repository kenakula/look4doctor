import { Box } from '@mui/material';
import { Container, PageSeo, Testimonials, TopBanner } from 'app/components';
import { useAppDispatch, getHomePageData, useAppSelector } from 'app/store';
import { useEffect } from 'react';
import { SearchBox } from './blocks';

const usePageDataFetch = (): void => {
  let dataFetched = false;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!dataFetched) {
      dispatch(getHomePageData());
      // eslint-disable-next-line react-hooks/exhaustive-deps
      dataFetched = true;
    }
  }, [dispatch]);
};

// TODO оборачивать блоки в контейнер тут
// TODO вынести компонент section

export const HomePage = (): JSX.Element => {
  usePageDataFetch();
  const { homePage } = useAppSelector(state => state.pages);

  return (
    <>
      <PageSeo
        title="title"
        description="description"
        url="https://look4doctor.ru"
        image="image.jpg"
        type="website"
      />
      <TopBanner
        title={homePage?.banner_title}
        imageId={homePage?.banner_image}
      />
      <SearchBox />
      <Box component="section" sx={{ py: 4 }}>
        <Container maxWidth="md">
          <Testimonials type="app" title="Отзывы о нашем сервисе" />
        </Container>
      </Box>
    </>
  );
};
