import { doc, setDoc } from 'firebase/firestore'
import { db } from '@/shared/config'
import { errorsHandler } from '@/shared/lib'

type SaveNicknameToDatabase = (nickname: string) => Promise<void>

export const saveNicknameToDatabase: SaveNicknameToDatabase =
  async nickname => {
    try {
      const nicknameReference = doc(db, 'nicknames', nickname)
      await setDoc(nicknameReference, { nickname })
    } catch (error) {
      errorsHandler({ error })
    }
  }
