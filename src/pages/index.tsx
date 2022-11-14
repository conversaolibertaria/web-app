import { useEffect } from 'react'
import { BeatLoader } from 'react-spinners'
import { useTheme } from 'styled-components'

import { If } from '@/components/If'
import { useAuth } from '@/hooks/useAuth'
import { Settings } from '@/core/settings'
import * as Styled from '@/styles/pages/index.style'

export default function Home() {
  const { login, isAuth, isLoading } = useAuth()
  const { colors } = useTheme()

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
      <If
        condition={!isLoading}
        elseComponent={<BeatLoader color={colors.primary} />}
      >
        <Styled.Container>
          <Styled.ImageBox>
            <Styled.SImage
              alt="login_cover"
              src={Settings.app.basePath + '/assets/login_bg.png'}
            />
          </Styled.ImageBox>
          <Styled.Form onSubmit={handleForm}>
            <Styled.InputGroup>
              <Styled.Label htmlFor="email-input">User</Styled.Label>
              <Styled.Input
                id="email-input"
                name="email"
                type="email"
                required
              />
            </Styled.InputGroup>
            <Styled.InputGroup>
              <label htmlFor="password-input">Password</label>
              <Styled.Input
                id="password-input"
                type="password"
                name="password"
                required
              />
            </Styled.InputGroup>
            <Styled.ButtonBox>
              <Styled.Button type="submit">Login</Styled.Button>
            </Styled.ButtonBox>
          </Styled.Form>
        </Styled.Container>
      </If>
    </>
  )
}
