
import styled from 'styled-components'
import media from 'styled-media-query'

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  margin-top: 150px;
  margin-bottom: 150px;
`

export const WavesUp = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 250px;
  max-height: 350px;

    ${media.lessThan('medium')`
      min-height: 50px;
      max-height: 150px;
    `}
  }
`

export const WavesLow = styled.svg`
  transform: scaleY(-1);
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 250px;
  max-height: 350px;

  ${media.lessThan('medium')`
    min-height: 50px;
    max-height: 150px;
  `}
`

export const Parallax = styled.g`
  & > use {
    animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
  }

  & > use:nth-child(1) {
    animation-delay: -2s;
    animation-duration: 7s;
  }

  & > use:nth-child(2) {
    animation-delay: -3s;
    animation-duration: 10s;
  }

  & > use:nth-child(3) {
    animation-delay: -4s;
    animation-duration: 13s;
  }

  & > use:nth-child(4) {
    animation-delay: -5s;
    animation-duration: 20s;
  }

  @keyframes move-forever {
    0% {
      transform: translate3d(-90px, 0, 0);
    }
    100% {
      transform: translate3d(85px, 0, 0);
    }
  }
`
