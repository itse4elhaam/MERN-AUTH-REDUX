import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:7000" }); // is added ahead of every req

export const apiSlice = createApi({
    baseQuery,
    tagTypes:['User'], // ! might throw error
    endpoints: (builder) => ({}) ,
});