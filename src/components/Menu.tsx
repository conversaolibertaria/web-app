import { MENU_ITENS } from '@/enums/menu-itens.enum'
import { MenuContainer, MenuItem, MenuItemList } from '@/styles/components/Menu'
import Link from 'next/link'

interface MenuProps {
  selectedMenu: MENU_ITENS
}

export function Menu({ selectedMenu }: MenuProps) {
  return (
    <MenuContainer>
      <MenuItemList>
        <MenuItem>
          <Link
            className={selectedMenu == MENU_ITENS.HOME ? 'active' : ''}
            href="home"
          >
            Home
          </Link>
        </MenuItem>
        <MenuItem>
          <Link href="about">Sobre</Link>
        </MenuItem>
        <MenuItem>
          <Link href="articles">Artigos</Link>
        </MenuItem>
        <MenuItem>
          <Link href="contact">Contato</Link>
        </MenuItem>
      </MenuItemList>
    </MenuContainer>
  )
}
