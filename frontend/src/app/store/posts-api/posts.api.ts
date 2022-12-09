import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postsApi = createApi({
  reducerPath: 'posts',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_SANITY_URL}`,
  }),
  endpoints: builder => ({
    getAllPosts: builder.query<any, void>({
      query: () => ({
        url: 'production',
        params: {
          query: '*[_type=="post"]',
        },
      }),
    }),
  }),
});

export const { useGetAllPostsQuery } = postsApi;
