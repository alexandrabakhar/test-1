import { DocumentData, doc, getDoc } from '@firebase/firestore'
import { db } from '@/shared/config'
import { errorsHandler } from '@/shared/lib'
import { User } from '../types'

type GetUser = (uid: User['uid']) => Promise<Nullable<DocumentData> | undefined>

export const getUser: GetUser = async uid => {
  const userReference = doc(db, 'users', uid)

  try {
    const documentSnap = await getDoc(userReference)
    if (documentSnap.exists()) {
      const data = documentSnap.data()

      return data
    }
    return null
  } catch (error) {
    errorsHandler({ error })
  }
}
