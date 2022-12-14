import { Directus } from '@directus/sdk';

export const directus = new Directus('https://asw9h040.directus.app', {
  auth: { mode: 'json', autoRefresh: false },
});
