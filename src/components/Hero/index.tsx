import * as S from './styled'
import RightImage from './rightImage.png'
import LeftImage from './leftImage.png'

const Hero = () => {

  return (
    <S.HeroWrapper>
      <S.LeftImage>
        <img
          src={LeftImage}
          alt="leftImage"
          width={300}
          height={400}
        />
      </S.LeftImage>
      <S.Content>
        Bruna & Igor
        <hr/>
        20 - 08 - 2022
      </S.Content>
      <S.RightImage>
        <img
          src={RightImage}
          alt="rightImage"
          width={300}
          height={400}
        />
      </S.RightImage>
    </S.HeroWrapper>
  )
}

export default Hero