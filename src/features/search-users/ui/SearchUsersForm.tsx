import { Button, Group, NativeSelect, TextInput } from '@mantine/core'
import { useForm } from '@mantine/form'
import { useTranslation } from 'react-i18next'
import { searchUsersThunk } from '@/entities/user'
import { useAppDispatch } from '@/shared/model'

export const SearchUsersForm = () => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()

  const form = useForm({
    initialValues: {
      searchField: 'nickname',
      searchText: '',
    },
  })
  const selectData = [
    { label: t('nickname'), value: 'nickname' },
    { label: t('fullName'), value: 'name' },
    { label: t('phone'), value: 'phone' },
  ]
  const handleSubmit = form.onSubmit(({ searchField, searchText }) => {
    dispatch(searchUsersThunk({ searchField, searchText }))
  })

  const handleReset = () => {
    form.reset()
    dispatch(searchUsersThunk())
  }

  return (
    <form onSubmit={handleSubmit}>
      <Group mt='md'>
        <NativeSelect
          data={selectData}
          {...form.getInputProps('searchField')}
        />
        <TextInput {...form.getInputProps('searchText')} />
      </Group>

      <Group mt='md'>
        <Button type='submit' disabled={!form.isDirty('searchText')}>
          {t('search')}
        </Button>
        <Button
          variant='outline'
          onClick={handleReset}
          disabled={!form.isDirty('searchText')}
        >
          {t('reset')}
        </Button>
      </Group>
    </form>
  )
}
