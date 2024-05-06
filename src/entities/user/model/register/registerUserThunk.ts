import { createAsyncThunk } from '@reduxjs/toolkit'
import { errorsHandler } from '@/shared/lib'
import { UserInfo } from '../types'
import { getIsUniqueNickname } from './api/getIsUniqueNickname'
import { saveNicknameToDatabase } from './api/saveNicknameToDatabase'
import { saveUser } from './api/saveUser'

export const registerUserThunk = createAsyncThunk(
  'user/registerUser',
  async (nickname: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    const userId = state.user.user?.uid

    if (!userId) return rejectWithValue(errorsHandler({ key: 'noUid' }))

    try {
      const isUnique = await getIsUniqueNickname(nickname)
      if (isUnique) {
        await saveNicknameToDatabase(nickname)

        const userData: UserInfo = {
          nickname,
          role: 'user',
          avatar: '',
          name: '',
          balance: 0,
          phone: '',
        }
        await saveUser(userId, userData)
        return userData
      }
      return rejectWithValue(errorsHandler({ key: 'nonUniqueNickname' }))
    } catch (error) {
      return rejectWithValue(errorsHandler({ error }))
    }
  },
)
