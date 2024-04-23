import {
  ActionIcon,
  useComputedColorScheme,
  useMantineColorScheme,
} from '@mantine/core'
import { IconSun, IconMoon } from '@tabler/icons-react'
import cx from 'clsx'
import classes from './styles.module.css'

export const ChangeTheme = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme('light', {
    getInitialValueInEffect: true,
  })

  const handleChangeTheme = () => {
    const newColorSchema = computedColorScheme === 'light' ? 'dark' : 'light'

    setColorScheme(newColorSchema)
  }

  return (
    <ActionIcon
      onClick={handleChangeTheme}
      variant='default'
      size='xl'
      aria-label='Toggle color scheme'
    >
      <IconSun className={cx(classes.icon, classes.light)} stroke={1.5} />
      <IconMoon className={cx(classes.icon, classes.dark)} stroke={1.5} />
    </ActionIcon>
  )
}
