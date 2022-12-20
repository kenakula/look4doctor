import { Directus } from '@directus/sdk';
import { BASE_DIRECTUS_PATH } from 'app/shared/assets';

export const directus = new Directus(BASE_DIRECTUS_PATH, {
  auth: { mode: 'json', autoRefresh: false },
});
