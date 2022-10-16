import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                "api key from env file"
            );
            return headers
        },
    }),
    endpoints: (builders) => ({
        getTopCharts: builders.query({ query: () => '/charts/world' }),

    })
});

export const {
    useGetTopChartsQuery,
} = shazamCoreApi;