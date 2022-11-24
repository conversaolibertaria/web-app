import { HomeContainer } from '@/styles/pages/home.style'
import { Menu } from '@/components/Menu'
import { MENU_ITENS } from '@/enums/menu-itens.enum'

export default function Home() {
  return (
    <HomeContainer>
      <Menu selectedMenu={MENU_ITENS.HOME} />
      <main>
        <h1>Frase de Efeito</h1>
      </main>
    </HomeContainer>
  )
}
