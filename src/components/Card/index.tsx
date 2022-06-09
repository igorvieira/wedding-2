import * as S from './styled'

export type CardProps = {
  banner: string
  description: string
  text: string
}



const Card = ({ banner, description, text }: CardProps) => {
  return (
    <S.Content >
      <S.Banner
        src={banner}
        width="100%"
        alt='hey'
      />
      <S.Description>
        <S.Text>
          {description}
        </S.Text>
        <S.Price>
          {text}
        </S.Price>
        <S.Button>
          Veja Mais...
        </S.Button>
      </S.Description>
    </S.Content>
  )
}

export default Card