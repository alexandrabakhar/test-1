import { Center, Loader, Stack } from '@mantine/core'
import { useEffect } from 'react'
import { SearchUsersForm } from '@/features/search-users'
import { UsersTable, searchUsersThunk } from '@/entities/user'
import { useAppDispatch, useAppSelector } from '@/shared/model'

export const ClientsPage = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector(state => state.user)
  useEffect(() => {
    dispatch(searchUsersThunk())
  }, [dispatch])

  if (!users) {
    return (
      <Center pos='fixed' top={0} left={0} right={0} bottom={0}>
        <Loader />
      </Center>
    )
  }
  return (
    <Stack gap='xl' p='md'>
      <SearchUsersForm />
      <UsersTable users={users} />
    </Stack>
  )
}
