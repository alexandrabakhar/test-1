import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/shared/config'
import { errorsHandler } from '@/shared/lib'
import { User, UserInfo } from '../../types'

type SaveUser = (uid: User['uid'], userData: UserInfo) => Promise<void>

export const saveUser: SaveUser = async (uid, userData) => {
  try {
    const nicknameReference = doc(db, 'users', uid)
    await setDoc(nicknameReference, userData)
  } catch (error) {
    errorsHandler({ error })
  }
}
