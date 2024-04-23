import { createAsyncThunk } from '@reduxjs/toolkit'
import { t } from 'i18next'
import { errorsHandler } from '@/shared/lib'
import { getIsUniqueNickname } from '../api/getIsUniqueNickname'
import { saveNicknameToDatabase } from '../api/saveNicknameToDatabase'
import { saveUser } from '../api/saveUser'
import { Role } from './types'

export const registerUserThunk = createAsyncThunk(
  'user/registerUser',
  async (nickname: string, { getState, rejectWithValue }) => {
    const state = getState() as RootState
    const userId = state.user.user?.uid

    if (!userId)
      return rejectWithValue(errorsHandler({ text: t('error.noUid') }))

    try {
      const isUnique = await getIsUniqueNickname(nickname)
      if (isUnique) {
        await saveNicknameToDatabase(nickname)

        const role = 'user' as Role
        await saveUser(userId, nickname, role)
        return { nickname, role }
      }
      return rejectWithValue(
        errorsHandler({ text: t('error.nonUniqueNickname') }),
      )
    } catch (error) {
      return rejectWithValue(errorsHandler({ error }))
    }
  },
)
