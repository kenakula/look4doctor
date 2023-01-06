import { getImageLink } from 'app/shared/assets';
import { PageType } from 'app/shared/types';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  type: PageType;
  image: string;
  url: string;
}

export const Seo = ({
  title,
  description,
  type,
  image,
  url,
}: Props): JSX.Element => {
  const pageSeoImage = getImageLink(image, 'meta-image.svg');

  return (
    <Helmet>
      <html lang="ru" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={pageSeoImage} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={pageSeoImage} />
    </Helmet>
  );
};
