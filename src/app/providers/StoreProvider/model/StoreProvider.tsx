import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { appStore } from '../config/appStore'

export const StoreProvider = ({ children }: PropsWithChildren) => {
  return <Provider store={appStore}>{children}</Provider>
}
