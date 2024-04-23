import { Route, Routes } from 'react-router-dom'
import { LoginPage } from '@/pages/LoginPage'
import { ProtectedAuth } from './ProtectedRoutes'

export const AppRouter = () => (
  <Routes>
    <Route path='/login' element={<LoginPage />} />

    <Route element={<ProtectedAuth />}>
      <Route path='/login' element={<LoginPage />} />
    </Route>

    <Route path='/' element={<div>MainPage</div>} />
  </Routes>
)
