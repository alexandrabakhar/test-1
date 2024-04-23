import { EnterNicknameForm } from '@/features/auth'
import { selectUser } from '@/entities/user'
import { useAppSelector } from '@/shared/model'
import { ChooseLoginWay } from './ChooseLoginWay'

export const Auth = () => {
  const { user } = useAppSelector(selectUser)

  if (user && !user.nickname) return <EnterNicknameForm />

  return <ChooseLoginWay />
}
