import { Seo, Section, Testimonials, TopBanner } from 'app/components';
import { useGetHomePageDataQuery } from 'app/store';
import { SearchBox } from './blocks';

export const HomePage = (): JSX.Element => {
  const { data } = useGetHomePageDataQuery();

  return (
    <>
      {data && (
        <Seo
          title={data.page_title}
          description={data.page_description}
          url={data.page_url}
          image={data.page_image}
          type={data.page_type}
        />
      )}
      <TopBanner title={data?.banner_title} imageId={data?.banner_image} />
      <Section>
        <SearchBox />
      </Section>
      <Section>
        <Testimonials type="app" title="Отзывы о нашем сервисе" />
      </Section>
    </>
  );
};
