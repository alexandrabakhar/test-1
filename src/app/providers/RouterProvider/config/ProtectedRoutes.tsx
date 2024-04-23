import { Navigate, Outlet, useLocation } from 'react-router-dom'

export const ProtectedAuth = () => {
  const isAuth = false

  const location = useLocation()

  if (isAuth) return <Navigate to='/' state={{ from: location }} replace />
  return <Outlet />
}
