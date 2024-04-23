import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from '@/shared/config'

export const authenticateWithGoogle = async () => {
  try {
    const userData = await signInWithPopup(auth, provider)

    return userData.user.uid
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : 'Failed to fetch nickname',
    )
  }
}
