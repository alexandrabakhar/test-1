import { registerUserThunk, selectUser } from '@/entities/user'
import { useAppDispatch, useAppSelector } from '@/shared/model'

export const useEnterNickname = () => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector(selectUser)

  const registerNewUser = async (nickname: string) => {
    if (!user?.uid) return

    await dispatch(registerUserThunk(nickname))
  }

  return { registerNewUser }
}
