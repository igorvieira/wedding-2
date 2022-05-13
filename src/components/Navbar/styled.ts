import styled from 'styled-components'
import media from 'styled-media-query'

export const Navbar = styled.nav`
  display: flex;
  height: 100px;
  align-items: center;
  padding-left: 150px;
  padding-right: 150px;
  background: inherit;
  justify-content: space-between;

  ${media.lessThan('medium')`
    padding-left: 50px;
    padding-right: 50px;
  `}
`

export const NavbarLogo = styled.div`
  letter-spacing: 1px;
  font-size: 26px;
  cursor: pointer;

  ${media.lessThan('medium')`
    font-size: 20px;
  `}

  ${media.lessThan('medium')`
    font-size: 16px;
  `}
`

export const NavbarLinks = styled.div`
  display: flex;
  align-items: center;
`

export const ItemLink = styled.div`
  margin-left: 12px;
  margin-right: 12px;
  cursor: pointer;

  ${media.lessThan('medium')`
    font-size: 20px;
  `}

  ${media.lessThan('medium')`
    font-size: 14px;
  `}
`

export const StyledLi = styled.li`
  float: left;
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

export const Dropbtn = styled.div`
  display: inline-block;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;

export const DropDownLi = styled(StyledLi)`
  display: inline-block;
  &:hover {
    background-color: #f1f1f1;
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

export const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;