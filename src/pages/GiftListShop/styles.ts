import styled from "styled-components";
import media from "styled-media-query";


export const ShoppingGift = styled.span`
  cursor: pointer;
  margin-bottom: 25px;
`
export const ShoppingImage = styled.img`
  width: 200px;
  height: 200px;
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

export const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 34px;
  letter-spacing: 4px;
`

export const ImageCover = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  ${media.lessThan("medium")`
    height: 250px;
    width: 100%;
  `}

`

export const Description = styled.div``