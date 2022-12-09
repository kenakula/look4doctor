export const getSanityDataset = (): string =>
  process.env.NODE_ENV === 'production' ? 'production' : 'staging';
