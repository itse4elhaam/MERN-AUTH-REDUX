import { apiSlice } from "./apiSlice";

const USERS_URL = "api/users";

// we're basically adding (mutating) endpoints to the function created in apiSlice  endpoints: (builder) => ({}) ,
// apiSlice.ts is like the parent to this file

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `$(USERS_URL)/auth`,
                method: 'POST',
                body:data
            })
        })
    })
})

// we're creating all this boiler plate code here and from our other files we will just have to dispatch a certain action, its an abstraction that we are creating for ourselves


export const { useLoginMutation } = userApiSlice;

// Mutation is for post
// We would've used query if it was a get req