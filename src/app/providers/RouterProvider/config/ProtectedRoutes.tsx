import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { selectUser } from '@/entities/user'
import { useAppSelector } from '@/shared/model'
import { RoutePaths } from '../model/routePaths'

export const ProtectedAuth = () => {
  const { user } = useAppSelector(selectUser)

  const location = useLocation()

  if (user?.nickname)
    return <Navigate to={RoutePaths.Main} state={{ from: location }} replace />
  return <Outlet />
}
