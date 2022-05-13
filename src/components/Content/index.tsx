import * as S from './styled'

export type ContentProps = {
  children: React.ReactNode
}

const Content = ({ children }: ContentProps) => {

  return (
    <S.Content>
      {children}
    </S.Content>
  )
}

export default Content