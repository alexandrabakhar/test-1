import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './appReducer'

export const appStore = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof appStore.getState>
export type AppDispatch = typeof appStore.dispatch
