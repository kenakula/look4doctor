import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISettings, ISpecialty } from 'app/shared/types';
import { BASE_DIRECTUST_COLLECTIONS_PATH } from '../assets';
import { ApiResponse } from '../types';

export const assetsApi = createApi({
  reducerPath: 'assetsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_DIRECTUST_COLLECTIONS_PATH,
  }),
  endpoints: builder => ({
    getSettings: builder.query<ISettings, null>({
      query: () => 'settings',
      transformResponse: (response: ApiResponse<ISettings>) => response.data,
    }),
    getSpecialties: builder.query<ISpecialty[], null>({
      query: () => 'specialties',
      transformResponse: (response: ApiResponse<ISpecialty[]>) => response.data,
    }),
  }),
});

export const { useGetSettingsQuery, useGetSpecialtiesQuery } = assetsApi;
