import { Group, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'
import { LogoutButton, NavigateToLoginButton } from '@/features/auth'
import { ChangeLanguage } from '@/features/language'
import { ChangeTheme } from '@/features/theme'
import { selectUser } from '@/entities/user'
import { useAppSelector } from '@/shared/model'
import { titleKeyByPath } from '../model/titleKeyByPath'

export const Header = () => {
  const { user } = useAppSelector(selectUser)
  const { pathname } = useLocation()
  const { t } = useTranslation()
  const title = t(titleKeyByPath[pathname])
  return (
    <Group justify='space-between' gap='xl'>
      {title && <Title>{title}</Title>}

      <Group gap='xs'>
        <Group gap='xs'>
          <ChangeLanguage />
          <ChangeTheme />
        </Group>
        {user && user.uid ? <LogoutButton /> : <NavigateToLoginButton />}
      </Group>
    </Group>
  )
}
