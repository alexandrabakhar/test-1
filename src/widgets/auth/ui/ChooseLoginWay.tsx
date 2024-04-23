import { Card, Flex, Group, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'
import { ByGoogleButton, ByGitHubButton } from '@/features/auth'

export const ChooseLoginWay = () => {
  const { t } = useTranslation()
  return (
    <Card shadow='md' p='xl'>
      <Flex direction='column' gap='xl' align='center'>
        <Title order={2}>{t('auth.signIn')}</Title>
        <Group gap={'xl'}>
          <ByGoogleButton />
          <ByGitHubButton />
        </Group>
      </Flex>
    </Card>
  )
}
