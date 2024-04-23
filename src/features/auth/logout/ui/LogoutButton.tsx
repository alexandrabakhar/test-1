import { Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { clearUser } from '@/entities/user'
import { useAppDispatch } from '@/shared/model'
import { logout } from '../api/logout'

export const LogoutButton = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const handleLogout = async () => {
    await logout()
    dispatch(clearUser())
  }
  return (
    <Button onClick={handleLogout} variant='default' size='md'>
      {t('auth.logoutBtn')}
    </Button>
  )
}
