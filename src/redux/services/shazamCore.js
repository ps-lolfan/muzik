import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shazamCoreApi = createApi({
    reducerPath: "shazamCoreApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://shazam-core.p.rapidapi.com/v1",
        prepareHeaders: (headers) => {
            headers.set(
                "X-RapidAPI-Key",
                "api key"
            );
            return headers
        },
    }),
    endpoints: (builders) => ({
        getTopCharts: builders.query({ query: () => '/charts/world' }),
        getSongDetails: builders.query({ query: ({ songid }) => `/tracks/details?track_id=${songid}` }),
        getSongRelated: builders.query({ query: ({ songid }) => `/tracks/related?track_id=${songid}` }),
        getArtistDetails: builders.query({ query: (artistId) => `/artists/details?artist_id=${artistId}` }),
        getSongsByCountry: builders.query({ query: (countryCode) => `/charts/country?country_code=${countryCode}` }),
    })
});

export const {
    useGetTopChartsQuery,
    useGetSongDetailsQuery,
    useGetSongRelatedQuery,
    useGetArtistDetailsQuery,
    useGetSongsByCountryQuery,
} = shazamCoreApi;