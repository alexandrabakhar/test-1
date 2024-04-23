import { Button } from '@mantine/core'
import { useTranslation } from 'react-i18next'

export const ByGitHubButton = () => {
  const { t } = useTranslation()

  return <Button color='dark'>{t('auth.continueWithGitHub')}</Button>
}
