import { AppShell, Group } from '@mantine/core'
import { LogoutButton, NavigateToLoginButton } from '@/features/auth'
import { ChangeLanguage } from '@/features/language'
import { ChangeTheme } from '@/features/theme'
import { selectUser } from '@/entities/user'
import { useAppSelector } from '@/shared/model'

export const Header = () => {
  const { user } = useAppSelector(selectUser)
  return (
    <AppShell.Header p='sm'>
      <Group justify='flex-end' gap='xl'>
        <Group gap='xs'>
          <ChangeLanguage />
          <ChangeTheme />
        </Group>
        {user && user.uid ? <LogoutButton /> : <NavigateToLoginButton />}
      </Group>
    </AppShell.Header>
  )
}
