interface Props {
  children: React.ReactElement
  condition: boolean
  elseComponent?: React.ReactElement
}

export function If({ children, condition, elseComponent = <></> }: Props) {
  return condition ? children : elseComponent
}
