import { notifications } from '@mantine/notifications'
import { t } from 'i18next'
type ErrorsHandlerProperties = {
  error?: unknown
  key?: string
}
export const errorsHandler = ({
  error,
  key,
}: ErrorsHandlerProperties): string => {
  const typedError = error as Error
  const textByKey = key ? t(`error.${key}`) : null
  const unhandledError = typedError?.message

  const message = textByKey || unhandledError
  const color = 'red'
  return notifications.show({
    message,
    color,
  })
}
