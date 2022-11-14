import Image from 'next/image'

import { StyledLogin } from '@/styles/Login'
import { useAuth } from '@/hooks/useAuth'
import { useEffect } from 'react'

export default function Home() {
  const { login, isAuth } = useAuth()

  const handleForm = async (e: any) => {
    e.preventDefault()
    const form = new FormData(e.target)
    const formData = Object.fromEntries(form.entries())

    await login(formData.email.toString(), formData.password.toString())
  }

  useEffect(() => {
    console.log('is auth =>', isAuth)
  }, [isAuth])

  return (
    <>
      <StyledLogin>
        <form onSubmit={handleForm} className="login-form">
          <img
            src={
              process.env.NEXT_PUBLIC_BASEPATH + '/assets/liberty_or_death.png'
            }
            alt="Liberty Or Death flag"
          />
          <div className="input-group">
            <label htmlFor="email-input">User</label>
            <input
              id="email-input"
              className="login-form-input"
              name="email"
              type="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password-input">Password</label>
            <input
              id="password-input"
              className="login-form-input"
              type="password"
              name="password"
              required
            />
          </div>
          <div className={`input-group ${'login-input-button'}`}>
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
        </form>
      </StyledLogin>
    </>
  )
}
