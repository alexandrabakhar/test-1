import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect } from 'react'
import { useAppDispatch } from '@/shared/model'
import { getUserDataThunk } from '../model/login/getUserDataThunk'
import { clearUser } from '../model/store'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const auth = getAuth()

  const checkAuthStatus = () => {
    const unsubscribe = onAuthStateChanged(auth, async user => {
      if (user) {
        dispatch(getUserDataThunk(user.uid))
        return
      }

      dispatch(clearUser())
    })
    return () => unsubscribe()
  }

  useEffect(checkAuthStatus, [])

  return null
}
