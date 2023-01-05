import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
  type: 'website' | 'article';
  image: string;
  url: string;
}

// TODO colors

export const GlobalSeo = (): JSX.Element => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      <meta content="notranslate" name="google" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

      <meta name="msapplication-TileColor" content="#2d89ef" />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
  );
};

export const PageSeo = ({
  title,
  description,
  type,
  image,
  url,
}: Props): JSX.Element => {
  return (
    <Helmet>
      <html lang="ru" />
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Helmet>
  );
};
