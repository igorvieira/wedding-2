import * as S from './styled'
import RightImage from './rightImage.png'
import LeftImage from './leftImage.png'

const Hero = () => {

  return (
    <S.HeroWrapper>
      <S.LeftImage
        src={LeftImage}
        alt="leftImage"
      />
      <S.Content>
        <S.Title>Bruna & Igor</S.Title>
        <hr/>
        20 - 08 - 2022
      </S.Content>
      <S.RightImage
        src={RightImage}
        alt="rightImage"
      />
    </S.HeroWrapper>
  )
}

export default Hero