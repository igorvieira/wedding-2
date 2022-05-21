import styled from "styled-components";
import media from "styled-media-query";


export const Title = styled.div`
  letter-spacing: 14px;
  font-size: 40px;

  ${media.lessThan('medium')`
    font-size: 30px;
    letter-spacing: 10px;
  `}

  ${media.lessThan('medium')`
    font-size: 30px;
    letter-spacing: 10px;
  `}

  ${media.lessThan('small')`
    font-size: 20px;
    letter-spacing: 8px;
  `}
`

export const HeroWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const RightImage = styled.img`
  width:300px;
  height:400px;

  ${media.lessThan('medium')`
    width: 99px;
    height: 160px;
  `}
`

export const LeftImage = styled.img`
  width:300px;
  height:400px;

  ${media.lessThan('medium')`
    width: 99px;
    height: 160px;
  `}
`

export const Content = styled.div`
  font-size: 34px;
  letter-spacing: 4px;
  text-align: center;
  margin-left: 12px;
  margin-right: 12px;

  ${media.lessThan('medium')`
    font-size: 24px;
  `}

  ${media.lessThan('small')`
    font-size: 14px;
  `}
`

