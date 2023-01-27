import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    value: 0,
}

export const listsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        
    },
})

// Action creators are generated for each case reducer function
export const {  } = listsSlice.actions

export default listsSlice.reducer