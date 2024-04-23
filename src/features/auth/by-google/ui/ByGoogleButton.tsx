import { Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { useAuthWithGoogle } from '../model/useAuthWithGoogle'

export const ByGoogleButton = () => {
  const { t } = useTranslation()

  const { authWithGoogle } = useAuthWithGoogle()
  const handleLogin = async () => {
    await authWithGoogle()
  }

  return (
    <Button onClick={handleLogin} variant='default'>
      {t('auth.continueWithGoogle')}
    </Button>
  )
}
