import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {authSlice} from "../store/authSlice";

export const productsApi = createApi({
    reducerPath : 'productsApi',
    baseQuery: fetchBaseQuery(
        {
            baseUrl:    'https://api.escuelajs.co/api/v1/',
                prepareHeaders: (headers, { getState }) => {
                const token = getState().auth.token
                if (token) {
                    headers.set('authorization', `Bearer ${token}`)
                    return headers
                }
            },

        }),
    endpoints: (builder) => ( {
        getAllProducts: builder.query({
                query: (page) => `products?limit=12&offset=${page === undefined ? 1 :page}`,

            }),

            getAllProductsSearch: builder.query({
                query: (page) => `products?`,

            }),


        registerPost: builder.mutation({
            query: (user) => {
                return {
                    url:'/users',
                    method: 'POST',
                    body: user,
                }
           },
        }),
         userLoginPost: builder.mutation({
            query: (userLogin) => {
                return {
                    url:'/auth/login',
                    method: 'POST',
                    body: userLogin,

                }


            },
        }),



    })



    })

export const {useGetAllProductsSearchQuery,useGetAllProductsQuery,useRegisterPostMutation,useUserLoginPostMutation} = productsApi;
