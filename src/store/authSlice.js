

import { createSlice } from '@reduxjs/toolkit'
import  { PayloadAction } from '@reduxjs/toolkit'



const authSlice = createSlice({
    name: 'auth',
    initialState: { user: null, token: null,userLogin: false} ,
    reducers: {
        setCredentials: (state,action) => {
            state.token = action.payload
        },

        setLogin: (state,action) => {
            state.userLogin = action.payload
        }
    },
})

export const { setCredentials,setLogin } = authSlice.actions

export default authSlice.reducer