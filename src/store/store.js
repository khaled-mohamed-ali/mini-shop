import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from "@reduxjs/toolkit/query/react";
import { productsApi} from "../services/productsApi";
import shoppingSlice from "./shopingCartSlice";
import authSlice from'./authSlice'

/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi } from '@reduxjs/toolkit/query/react'
const reducers = {
    cart: shoppingSlice,
    auth: authSlice,
    [productsApi.reducerPath] : productsApi.reducer,


};

export const store =  configureStore({
    reducer: reducers,

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware)

})
setupListeners(store.dispatch)



