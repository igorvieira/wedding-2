import * as S from './styles'


const Footer = () => {

  const currentYear = () => {
    return new Date().getFullYear()
  }

  return (
    <S.FooterContent>

        <hr />
        <S.Title>Bruna & Igor - {currentYear()}</S.Title>

    </S.FooterContent>
  )
}

export default Footer;