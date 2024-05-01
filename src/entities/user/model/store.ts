import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getUserDataThunk } from './login/getUserDataThunk'
import { registerUserThunk } from './register/registerUserThunk'
import { searchUsersThunk } from './search/searchUsersThunk'
import { User, UserInfo } from './types'

export type UserSliceState = {
  user: Nullable<User>
  error: Nullable<string>
  users?: Nullable<UserInfo[]>
}
const initialState: UserSliceState = {
  user: null,
  error: null,
  users: null,
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
    builder.addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user
    }),
      builder.addCase(registerUserThunk.fulfilled, (state, { payload }) => {
        if (state.user) {
          state.user.role = payload.role
          state.user.nickname = payload.nickname
        }
      }),
      builder.addCase(searchUsersThunk.fulfilled, (state, { payload }) => {
        state.users = payload.users
      })
  },
})
export const { setUser, clearUser } = userSlice.actions
export const userReducer = userSlice.reducer
export const selectUser = (state: RootState) => state.user
