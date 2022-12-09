import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSanityDataset } from '../assets';

export interface RootObject<T> {
  ms: number;
  query: string;
  result: T;
}

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SANITY_URL}`,
  }),
  endpoints: builder => ({
    getAllPosts: builder.query<RootObject<{ title: string }>, void>({
      query: () => ({
        url: getSanityDataset(),
        params: {
          query: '*[_type=="globalSettings"][0]',
        },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
