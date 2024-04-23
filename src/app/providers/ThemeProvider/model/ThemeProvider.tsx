import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { PropsWithChildren } from 'react'
import { theme } from '../config/theme'

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MantineProvider theme={theme}>
      {children}
      <Notifications />
    </MantineProvider>
  )
}
