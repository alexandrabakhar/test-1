import { Route, Routes } from 'react-router-dom'
import { ClientsPage } from '@/pages/ClientsPage'
import { LoginPage } from '@/pages/LoginPage'
import { RoutePaths } from '../model/routePaths'
import { ProtectedAuth } from './ProtectedRoutes'

export const AppRouter = () => (
  <Routes>
    <Route element={<ProtectedAuth />}>
      <Route path={RoutePaths.Login} element={<LoginPage />} />
    </Route>

    <Route path={RoutePaths.Clients} element={<ClientsPage />} />

    <Route path={RoutePaths.Main} element={<div>MainPage</div>} />
  </Routes>
)
