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
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={pageSeoImage} />

      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={pageSeoImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={pageSeoImage} />
    </Helmet>
  );
};
