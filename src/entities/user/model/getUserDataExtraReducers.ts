import { ActionReducerMapBuilder } from '@reduxjs/toolkit'
import { getUserDataThunk } from './getUserDataThunk'
import { UserSliceState } from './store'

export const getUserDataExtraReducers = (
  builder: ActionReducerMapBuilder<UserSliceState>,
) => {
  builder
    .addCase(getUserDataThunk.pending, state => {
      state.error = null
    })
    .addCase(getUserDataThunk.fulfilled, (state, { payload }) => {
      state.user = payload.user
    })
    .addCase(getUserDataThunk.rejected, (state, { payload }) => {
      state.error = payload as string
    })
}
