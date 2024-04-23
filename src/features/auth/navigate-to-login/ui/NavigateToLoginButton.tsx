import { Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

export const NavigateToLoginButton = () => {
  const { t } = useTranslation()
  return (
    <Button variant='outline' size='md' to={'/login'} component={Link}>
      {t('auth.navigateBtn')}
    </Button>
  )
}
