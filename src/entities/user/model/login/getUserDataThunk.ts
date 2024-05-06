import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorsHandler } from '@/shared/lib'
import { getUser } from './api'

export const getUserDataThunk = createAsyncThunk(
  'user/fetchUser',
  async (uid: string, { rejectWithValue }) => {
    try {
      const userData = await getUser(uid)

      const user = {
        uid: uid,
        nickname: userData ? userData.nickname : null,
        role: userData ? userData.role : null,
      }
      return { user }
    } catch (error) {
      return rejectWithValue(errorsHandler({ error }))
    }
  },
)
