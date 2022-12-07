import { CollectionConfig } from 'payload/types';
import { isAdminOrCurrentUser } from '../access';

const MediaCollection: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
    create: () => true,
    update: isAdminOrCurrentUser,
    delete: isAdminOrCurrentUser,
  },
  upload: {
    staticURL: '/media',
    staticDir: 'media',
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 1024,
        position: 'centre',
      },
      {
        name: 'tablet',
        width: 1024,
        height: undefined,
        position: 'centre',
      },
    ],
    adminThumbnail: 'thumbnail',
    mimeTypes: ['image/*'],
  },
  fields: [],
};

export default MediaCollection;
