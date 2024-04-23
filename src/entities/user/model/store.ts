import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getUserDataExtraReducers } from './getUserDataExtraReducers'
import { registerUserExtraReducers } from './registerUserExtraReducers'
import { User } from './types'

export type UserSliceState = {
  user: Nullable<User>
  error: Nullable<string>
}
const initialState: UserSliceState = {
  user: null,
  error: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (
      state,
      { payload }: PayloadAction<{ user: UserSliceState['user'] }>,
    ) => {
      state.user = payload.user
    },

    clearUser: state => {
      state.user = null
    },
  },
  extraReducers: builder => {
    getUserDataExtraReducers(builder), registerUserExtraReducers(builder)
  },
})
export const { setUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user
