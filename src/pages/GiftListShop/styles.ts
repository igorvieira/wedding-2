import styled from "styled-components";
import media from "styled-media-query";


export const ShoppingGift = styled.span`
  cursor: pointer;
  margin-bottom: 25px;
`
export const ShoppingImage = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 25px;
  margin-bottom: 25px;

  ${media.lessThan('medium')`
    margin-right: 0;
  `}

  ${media.lessThan('small')`
    width: 300px;
    height: 300px;
  `}
`
export const ShoppingContent = styled.div`
  margin-top: 100px;
  display: flex;
  flex-flow: row wrap;

  ${media.lessThan('small')`
    justify-content: center;
  `}
`

