import { RouterProvider } from './RouterProvider'
import { StoreProvider } from './StoreProvider'
import { StrictProvider } from './StrictProvider'
import { ThemeProvider } from './ThemeProvider'

export const PROVIDERS = [
  StrictProvider,
  StoreProvider,
  ThemeProvider,
  RouterProvider,
]

export { ProviderComposer } from './ProviderComposer'
export { AppRouter } from './RouterProvider'
