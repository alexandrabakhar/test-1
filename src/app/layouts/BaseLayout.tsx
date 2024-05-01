import { AppShell } from '@mantine/core'
import { Header } from '@/widgets/Header'
import { useAuth } from '@/entities/user'
import { AppRouter } from '../providers'

export const BaseLayout = () => {
  useAuth()
  return (
    <AppShell header={{ height: 70 }}>
      <AppShell.Header p='sm'>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <AppRouter />
      </AppShell.Main>
    </AppShell>
  )
}
