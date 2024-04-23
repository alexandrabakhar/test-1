import { notifications } from '@mantine/notifications'
type ErrorsHandlerProperties = {
  text?: string
  error?: unknown
}
export const errorsHandler = ({
  text,
  error,
}: ErrorsHandlerProperties): string => {
  const typedError = error as Error

  const unhandledError = typedError?.message

  const message = text || unhandledError
  const color = 'red'
  return notifications.show({
    message,
    color,
  })
}
