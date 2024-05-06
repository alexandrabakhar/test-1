import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/shared/config'
import { errorsHandler } from '@/shared/lib'

type GetIsUniqueNickname = (nickname: string) => Promise<boolean | undefined>

export const getIsUniqueNickname: GetIsUniqueNickname = async nickname => {
  try {
    const nicknameReference = doc(db, 'nicknames', nickname)
    const documentSnap = await getDoc(nicknameReference)
    return !documentSnap.exists()
  } catch (error) {
    errorsHandler({ error })
  }
}
