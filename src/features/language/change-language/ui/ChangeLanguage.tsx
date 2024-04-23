import { ActionIcon, Title } from '@mantine/core'
import { useTranslation } from 'react-i18next'

type Language = 'ru' | 'en'

export const ChangeLanguage = () => {
  const { i18n } = useTranslation()

  const handleChangeLanguage = (language: Language) => () => {
    i18n.changeLanguage(language)
  }

  return (
    <ActionIcon variant='default' size='xl' aria-label='Toggle color scheme'>
      {i18n.language === 'en' ? (
        <Title order={3} onClick={handleChangeLanguage('ru')}>
          ru
        </Title>
      ) : (
        <Title order={3} onClick={handleChangeLanguage('en')}>
          en
        </Title>
      )}
    </ActionIcon>
  )
}
