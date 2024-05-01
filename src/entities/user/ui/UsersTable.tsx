import { Avatar, Badge, Flex, NumberFormatter } from '@mantine/core'
import {
  createColumnHelper,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useTranslation } from 'react-i18next'
import { Table } from '@/shared/ui'
import { UserInfo } from '../model/types'

type UsersTableProperties = {
  users: UserInfo[]
}
export const UsersTable = ({ users }: UsersTableProperties) => {
  const columnHelper = createColumnHelper<UserInfo>()
  const { t } = useTranslation()

  const columns = [
    columnHelper.accessor(row => row.name, {
      id: 'avatarAndName',
      cell: info => {
        return (
          <Flex align='center' gap='sm'>
            <Avatar
              variant='filled'
              radius='xl'
              src={info.row.original.avatar}
              alt='user'
            />

            {info.row.original.name}
          </Flex>
        )
      },
      header: () => <span>{t('fullName')}</span>,
    }),
    columnHelper.accessor('role', {
      header: () => <span>{t('role')}</span>,
      cell: info =>
        info.getValue() === 'admin' ? (
          <Badge variant='outline' color='red'>
            {info.getValue()}
          </Badge>
        ) : (
          <Badge variant='outline' color='indigo'>
            {info.getValue()}
          </Badge>
        ),
    }),
    columnHelper.accessor('nickname', {
      header: () => <span>{t('nickname')}</span>,
    }),
    columnHelper.accessor('phone', {
      header: () => <span>{t('phone')}</span>,
    }),
    columnHelper.accessor('balance', {
      header: () => <span>{t('balance')}</span>,
      cell: info => <NumberFormatter value={info.getValue()} prefix='$ ' />,
    }),
  ]

  const table = useReactTable({
    data: users,
    columns,
    columnResizeMode: 'onChange',
    columnResizeDirection: 'ltr',
    getSortedRowModel: getSortedRowModel(),
    getCoreRowModel: getCoreRowModel(),
  })

  return <Table tableInstance={table} />
}
