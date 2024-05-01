import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "adminApi",
  tagTypes: ["User"],
  keepUnusedDataFor: 5,
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id) => `general/user/${id}`,
      providesTags: ["User"],
    }),
  }),
});

export const { useGetUserQuery } = api;
