import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_DIRECTUS_COLLECTIONS_PATH } from 'app/shared/assets';
import { IPageData } from 'app/shared/types';
import { ApiResponse } from '../types';

export const pagesApi = createApi({
  reducerPath: 'pagesApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_DIRECTUS_COLLECTIONS_PATH,
  }),
  endpoints: builder => ({
    getHomePageData: builder.query<IPageData, void>({
      query: () => 'home_page',
      transformResponse: (response: ApiResponse<IPageData>) => response.data,
    }),
  }),
});

export const { useGetHomePageDataQuery } = pagesApi;
