import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_DIRECTUS_COLLECTIONS_PATH } from 'app/shared/assets';
import { ISettings, ISpecialty } from 'app/shared/types';
import { ApiResponse } from '../types';

export const assetsApi = createApi({
  reducerPath: 'assetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_DIRECTUS_COLLECTIONS_PATH,
  }),
  endpoints: builder => ({
    getSettings: builder.query<ISettings, void>({
      query: () => 'settings',
      transformResponse: (response: ApiResponse<ISettings>) => response.data,
    }),
    getSpecialties: builder.query<ISpecialty[], void>({
      query: () => 'specialties',
      transformResponse: (response: ApiResponse<ISpecialty[]>) => response.data,
    }),
  }),
});

export const { useGetSettingsQuery, useGetSpecialtiesQuery } = assetsApi;
