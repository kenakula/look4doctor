import { getSanityDataset } from 'app/shared/assets';
import sanityClient from '@sanity/client';

const projectId = process.env.REACT_APP_SANITY_ID;

export const client = sanityClient({
  projectId,
  dataset: getSanityDataset(),
  apiVersion: '2021-10-21',
  useCdn: false,
});
