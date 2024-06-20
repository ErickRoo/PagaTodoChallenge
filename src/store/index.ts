import { configureStore } from '@reduxjs/toolkit'
import banksReducer from './bank/bankSlice'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    banks: banksReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()