import { getUserDataThunk } from '@/entities/user'
import { useAppDispatch } from '@/shared/model'
import { authenticateWithGoogle } from '../api/authenticateWithGoogle'

export const useAuthWithGoogle = () => {
  const dispatch = useAppDispatch()
  const authWithGoogle = async () => {
    const uid = await authenticateWithGoogle()
    dispatch(getUserDataThunk(uid))
  }

  return { authWithGoogle }
}
