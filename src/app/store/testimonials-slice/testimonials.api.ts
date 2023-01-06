import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { BASE_DIRECTUS_COLLECTIONS_PATH } from 'app/shared/assets';
import { ITestimonial, ITestimonialType } from 'app/shared/types';
import { ApiResponse } from '../types';

export const testimonialsApi = createApi({
  reducerPath: 'testimonialsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_DIRECTUS_COLLECTIONS_PATH,
  }),
  endpoints: builder => ({
    getAllTestimonials: builder.query<ITestimonial[], void>({
      query: () => ({
        url: 'testimonials',
        params: { fields: '*.*' },
      }),
      transformResponse: (response: ApiResponse<ITestimonial[]>) =>
        response.data,
    }),
    getTestimonialsByType: builder.query<ITestimonial[], ITestimonialType>({
      query: type => ({
        url: 'testimonials',
        params: {
          fields: '*.*',
          filter: `{ "type": { "_eq": "${type}" } }`,
        },
      }),
      transformResponse: (response: ApiResponse<ITestimonial[]>) =>
        response.data,
    }),
  }),
});

export const { useGetAllTestimonialsQuery, useGetTestimonialsByTypeQuery } =
  testimonialsApi;
