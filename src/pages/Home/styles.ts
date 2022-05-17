
import styled from 'styled-components'

export const Waves = styled.svg`
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  /*Fix for safari gap*/
  min-height: 250px;
  max-height: 350px;

  @media (max-width: 768px) {
    .waves {
      height: 40px;
      min-height: 40px;
    }
  }
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



// .waves {
//   position: relative;
//   width: 100%;
//   height: 15vh;
//   margin-bottom: -7px;
//   /*Fix for safari gap*/
//   min-height: 100px;
//   max-height: 150px;
// }

// /* Animation */
// .parallax>use {
//   animation: move-forever 25s cubic-bezier(.55, .5, .45, .5) infinite;
// }
// .parallax>use:nth-child(1) {
//   animation-delay: -2s;
//   animation-duration: 7s;
// }
// .parallax>use:nth-child(2) {
//   animation-delay: -3s;
//   animation-duration: 10s;
// }
// .parallax>use:nth-child(3) {
//   animation-delay: -4s;
//   animation-duration: 13s;
// }
// .parallax>use:nth-child(4) {
//   animation-delay: -5s;
//   animation-duration: 20s;
// }
// @keyframes move-forever {
//   0% {
//     transform: translate3d(-90px, 0, 0);
//   }
//   100% {
//     transform: translate3d(85px, 0, 0);
//   }
// }
// /*Shrinking for mobile*/
// @media (max-width: 768px) {
//   .waves {
//     height: 40px;
//     min-height: 40px;
//   }
//   .content {
//     height: 30vh;
//   }
//   h1 {
//     font-size: 24px;
//   }
// }