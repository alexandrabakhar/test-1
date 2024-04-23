import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/shared/config'
import { errorsHandler } from '@/shared/lib'
import { Role, User } from '../model/types'

type SaveUser = (
  uid: User['uid'],
  nickname: string,
  role: Role,
) => Promise<void>

export const saveUser: SaveUser = async (uid, nickname, role) => {
  try {
    const nicknameReference = doc(db, 'users', uid)
    await setDoc(nicknameReference, { nickname, role })
  } catch (error) {
    errorsHandler({ error })
  }
}
