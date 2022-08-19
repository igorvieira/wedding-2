import { Link } from 'react-router-dom'
import * as S from './styled'

const Navbar = () => {

  return (
    <S.Navbar>
      <Link to="/">
        <S.NavbarLogo>
          B & I
        </S.NavbarLogo>
      </Link>
      <S.NavbarLinks>
        <S.ItemLink>
        <S.DropDownLi>
          <S.Dropbtn>
            Páginas
          </S.Dropbtn>
            <S.DropDownContent>
              {" "}
              <Link to="/our-story">
                <S.SubA>Nossa história</S.SubA>
              </Link>
              <Link to="/to-the-bride-and-groom">
                <S.SubA>Mensagem aos noivos</S.SubA>
              </Link>
              <Link to="/ceremony">
                <S.SubA>Cerimônia religiosa</S.SubA>
              </Link>
              <Link to="/online-ceremony">
                <S.SubA>Cerimônia On-Line</S.SubA>
              </Link>
            </S.DropDownContent>

          </S.DropDownLi>
        </S.ItemLink>
        <S.ItemLink>
          <S.DropDownLi>
            <S.Dropbtn>
              Presentes
            </S.Dropbtn>
              <S.DropDownContent>
                {" "}
                <Link to="/gift-list-shop">
                  <S.SubA>Lista de loja</S.SubA>
                </Link>
                <Link to="/honeymoon">
                  <S.SubA>Cotas de Lua de Mel</S.SubA>
                </Link>
              </S.DropDownContent>

            </S.DropDownLi>
        </S.ItemLink>
      </S.NavbarLinks>
    </S.Navbar>
  )
}

export default Navbar
