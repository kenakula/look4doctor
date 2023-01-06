import { BASE_DIRECTUS_ASSETS_URL } from './directus-constants';

// TODO implement picture webp

interface ImageSizes {
  width: number;
  height: number;
}

interface ImageOptions {
  sizes?: ImageSizes;
  format?: string;
  highQuality?: boolean;
}

const DEFAULT_IMAGE_QUALITY = '75';

export const getImageLink = (
  id: string,
  seoName: string,
  options?: ImageOptions,
): string => {
  const query = new URLSearchParams();
  query.append('quality', DEFAULT_IMAGE_QUALITY);

  if (options) {
    if (options.format) {
      query.append('format', options.format);
    }

    if (options.sizes) {
      query.append('width', options.sizes.width.toString());
      query.append('height', options.sizes.height.toString());
    }

    if (options.highQuality) {
      query.delete('quality');
    }
  }

  const params = query.toString().length ? `?${query.toString()}` : '';

  return `${BASE_DIRECTUS_ASSETS_URL}/${id}/${seoName}${params}`;
};
