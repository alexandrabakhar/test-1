import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { registerUserThunk } from './registerUserThunk'
import { UserSliceState } from './store'

export const registerUserExtraReducers = (
  builder: ActionReducerMapBuilder<UserSliceState>,
) => {
  builder
    .addCase(registerUserThunk.pending, state => {
      state.error = null
    })
    .addCase(registerUserThunk.fulfilled, (state, { payload }) => {
      if (state.user) {
        state.user.role = payload.role
        state.user.nickname = payload.nickname
      }
    })
    .addCase(registerUserThunk.rejected, (state, { payload }) => {
      state.error = payload as string
    })
}
