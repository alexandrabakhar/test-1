import { PropsWithChildren } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const RouterProvider = ({ children }: PropsWithChildren) => {
  return <BrowserRouter>{children}</BrowserRouter>
}
