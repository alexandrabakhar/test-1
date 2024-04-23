import { Button, Card, Flex, TextInput, Title } from '@mantine/core'
import { useForm, yupResolver } from '@mantine/form'
import { useTranslation } from 'react-i18next'
import { string } from 'yup'
import { useEnterNickname } from '../lib/useEnterNickname'
import { nicknameSchema } from '../model/nicknameSchema'

export const EnterNicknameForm = () => {
  const { registerNewUser } = useEnterNickname()
  const { t } = useTranslation()

  const translatedSchema = nicknameSchema.shape({
    nickname: string()
      .matches(/^\w+$/, t('error.invalidNickname'))
      .required(t('error.nicknameRequired')),
  })
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      nickname: '',
    },
    validate: yupResolver(translatedSchema),
  })

  const handleSubmit = form.onSubmit(({ nickname }) => {
    registerNewUser(nickname)
  })

  return (
    <Card shadow='md' mx='auto' p='xl'>
      <form onSubmit={handleSubmit}>
        <Flex
          gap='md'
          justify='flex-start'
          align='flex-start'
          direction='column'
        >
          <Title order={3}>{t('auth.signIn')}</Title>
          <TextInput
            withAsterisk
            label={t('auth.inputLabel')}
            placeholder={t('auth.inputPlaceholder')}
            description={t('auth.inputDescription')}
            {...form.getInputProps('nickname')}
          />
          <Button mt='md' type='submit'>
            {t('auth.submitBtn')}
          </Button>
        </Flex>
      </form>
    </Card>
  )
}
