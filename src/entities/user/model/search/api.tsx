import {
  DocumentData,
  Query,
  collection,
  getDocs,
  query,
  where,
} from '@firebase/firestore'
import { db } from '@/shared/config'
import { errorsHandler } from '@/shared/lib'
import { FirestoreQueryOperators } from '@/shared/model'
import { UserInfo } from '../types'
import { getEndStringForPrefix } from './utils'

type FetchUsersArguments = Required<{
  searchField: string
  searchText: string
}>

export const fetchUsers = async (arguments_?: FetchUsersArguments) => {
  let finalQuery: Query<unknown, DocumentData> = collection(db, 'users')

  if (arguments_ && arguments_.searchText) {
    const { searchField, searchText } = arguments_
    const startAt = searchText
    const endAt = getEndStringForPrefix(searchText)

    finalQuery = query(
      collection(db, 'users'),
      where(searchField, FirestoreQueryOperators.GreaterThanOrEqual, startAt),
      where(searchField, FirestoreQueryOperators.LessThan, endAt),
    )
  }

  try {
    const querySnapshot = await getDocs(finalQuery)
    const users: UserInfo[] = []
    querySnapshot.forEach(document => {
      const data = document.data() as UserInfo
      users.push({
        ...data,
      })
    })

    return users
  } catch (error) {
    errorsHandler({ error })
  }
}
