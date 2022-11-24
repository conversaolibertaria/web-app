import styled from 'styled-components'

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-family: 'Roboto', sans-serif;
`

export const MenuItemList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 15px;
`

export const MenuItem = styled.li`
  display: flex;
  color: white;

  a {
    padding: 5px;
  }

  a.active {
    color: #f5dc00;
    text-shadow: 0 0 15px #f5dc00;
  }
`
