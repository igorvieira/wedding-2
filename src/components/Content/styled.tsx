import styled from 'styled-components'
import media from 'styled-media-query'

export const Content = styled.section`
  margin-left: 150px;
  margin-right: 150px;
  margin-bottom: 250px;

  ${media.lessThan('medium')`
    margin-left: 50px;
    margin-right: 50px;
    margin-bottom: 50px;
  `}
`