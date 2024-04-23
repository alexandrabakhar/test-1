import { PropsWithChildren, StrictMode } from 'react'

export const StrictProvider = ({ children }: PropsWithChildren) => {
  return <StrictMode>{children}</StrictMode>
}
