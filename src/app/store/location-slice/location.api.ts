import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_DIRECTUS_COLLECTIONS_PATH } from 'app/shared/assets';
import { ICity, IRegion } from 'app/shared/types';
import { ApiResponse } from '../types';

export const locationApi = createApi({
  reducerPath: 'locationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_DIRECTUS_COLLECTIONS_PATH,
  }),
  endpoints: builder => ({
    getCities: builder.query<ICity[], string | null>({
      query: id => ({
        url: id ? `cities/${id}` : 'cities',
        params: { fields: '*.*' },
      }),
      transformResponse: (response: ApiResponse<ICity[]>) => response.data,
    }),
    getRegions: builder.query<IRegion[], string>({
      query: id => ({
        url: id ? `regions/${id}` : 'regions',
        params: { fields: '*.*' },
      }),
      transformResponse: (response: ApiResponse<IRegion[]>) => response.data,
    }),
  }),
});

export const { useGetCitiesQuery, useGetRegionsQuery } = locationApi;
