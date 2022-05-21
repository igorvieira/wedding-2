import styled from "styled-components";
import media from "styled-media-query";


export const FooterContent = styled.div`
  margin-top: 100px;
  margin-left: 120px;
  margin-right: 120px;
  padding-bottom: 150px;
  text-align: center;

  ${media.lessThan('medium')`
    margin-left: 50px;
    margin-right: 50px;
  `}
`

export const Title = styled.i`
  margin-top: 30px;
  font-size:  18px;
`

