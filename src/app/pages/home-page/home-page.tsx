import { TopBanner } from 'app/components';
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

export const HomePage = (): JSX.Element => {
  usePageDataFetch();
  const { homePage } = useAppSelector(state => state.pages);

  return (
    <>
      <TopBanner
        title={homePage?.banner_title}
        imageId={homePage?.banner_image}
      />
      <SearchBox />
    </>
  );
};
