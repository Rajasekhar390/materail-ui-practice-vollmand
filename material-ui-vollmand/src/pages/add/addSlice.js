import { createSlice } from '@reduxjs/toolkit'


//  const initialState = {
//   value: 0,
// }

export const addSlice = createSlice({
  name: 'posts',
  initialState: {
    items: []
  },

  reducers: {
    addPost: function (state, action) {
      state.items.push(action.payload)
    },
    deletePost: function (state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
    }

  },
})

// Action creators are generated for each case reducer function
export const { addPost, deletePost } = addSlice.actions

export default addSlice.reducer