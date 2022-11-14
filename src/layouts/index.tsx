import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/GlobalStyle'
import { baseTheme } from '@/styles/themes'
import { AuthProvider } from '@/hooks/useAuth'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <AuthProvider>
        <Container>{children}</Container>
      </AuthProvider>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 25px;
`

export default Layout
