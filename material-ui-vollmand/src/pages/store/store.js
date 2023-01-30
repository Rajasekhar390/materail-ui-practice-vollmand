import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../counter/counterSlice'
import loremSlice from '../lorem/loremSlice'
import addReducer from '../add/addSlice'
import usersReducer from '../users/usersSlice'
import postsReducer from '../posts/postSlice'
import listsReducer from '../lists/listsSlice'
import searchReducer from '../SearchId/searchSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    add: addReducer,
    lorem: loremSlice.reducer,
    users: usersReducer,
    posts: postsReducer,
    lists: listsReducer,
    search: searchReducer
  },
})
