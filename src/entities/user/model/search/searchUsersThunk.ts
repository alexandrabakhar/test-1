import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorsHandler } from '@/shared/lib'
import { fetchUsers } from './api'

type FetchUsersArguments =
  | Required<{
      searchField: string
      searchText: string
    }>
  | undefined
export const searchUsersThunk = createAsyncThunk(
  'user/searchUsers',
  async (arguments_: FetchUsersArguments, { rejectWithValue }) => {
    try {
      const users = await fetchUsers(arguments_)
      return { users }
    } catch (error) {
      return rejectWithValue(errorsHandler({ error }))
    }
  },
)
