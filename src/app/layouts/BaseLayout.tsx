import { AppShell } from '@mantine/core'
import { Header } from '@/widgets/Header'
import { useAuth } from '@/entities/user'
import { AppRouter } from '../providers'

export const BaseLayout = () => {
  useAuth()
  return (
    <AppShell>
      <Header />
      <AppShell.Main>
        <AppRouter />
      </AppShell.Main>
    </AppShell>
  )
}
