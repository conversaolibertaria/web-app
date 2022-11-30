import { createContext, useContext, useState } from 'react'

import { FirebaseLoginService } from '@/core/services/firebase/firebase-login-service'
import { USERS_COLLECTION } from '@/core/data/local-storage'
import { User } from '@/core/entities/user'

const firebaseLoginService = new FirebaseLoginService()

interface AuthContext {
  login: (email: string, password: string) => Promise<void>
  isAuth: boolean
  isLoading: boolean
  hasError: boolean
  getError: () => string
}

interface AuthProvider {
  children: React.ReactNode
}

const AuthContext = createContext({} as AuthContext)

export function AuthProvider(props: AuthProvider) {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [error, setError] = useState('')

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    const result = await firebaseLoginService.login(email, password)

    if (result.isErr()) {
      setError(result.unwrapErr())
      setHasError(true)
      setIsAuth(false)
    } else {
      const token = result.unwrap()

      const user = User({
        email,
        token,
      })

      if (user.isOk()) {
        localStorage.setItem(USERS_COLLECTION, JSON.stringify(user.unwrap()))
        setIsAuth(true)
        setHasError(false)
      } else {
        setIsAuth(false)
        setHasError(true)
        setError(user.unwrapErr().message)
      }
    }

    return setIsLoading(false)
  }

  const getError = () => error

  return (
    <AuthContext.Provider
      value={{
        login,
        isAuth,
        isLoading,
        hasError,
        getError,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  return context
}
