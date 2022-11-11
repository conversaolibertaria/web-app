import styled, { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/styles/GlobalStyle'
import { baseTheme } from '@/styles/themes'

interface Props {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <ThemeProvider theme={baseTheme}>
      <GlobalStyle />
      <Container>{children}</Container>
    </ThemeProvider>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 35px;
`

export default Layout
