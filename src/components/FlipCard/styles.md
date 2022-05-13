<!-- import styled from "styled-components";

const flipClock = styled.div`
  display: flex;
  justify-content: space-between;
  width: 500px;
`

export const flipUnitContainer = styled.div`
  display: block;
  position: relative;
  width: 140px;
  height: 120px;
  perspective-origin: 50% 50%;
  perspective: 300px;
  background-color: white;
  border-radius: 3px;
  box-shadow: 0px 10px 10px -10px grey;
`

export const card = () => `
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  height: 50%;
  overflow: hidden;
  border: 1px solid whitesmoke;

  & span {
    font-size: 5em;
    font-family: "Droid Sans Mono", monospace;
    font-weight: lighter;
    color: #333333;
  }
`

export const upperCard = styled.div`
  ${card}

  align-items: flex-end;
  border-bottom: 0.5px solid whitesmoke;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;

  & span {
    transform: translateY(50%);
  }
`

export const lowerCard = styled.div`
  ${card}

  align-items: flex-start;
  border-top: 0.5px solid whitesmoke;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;

  & span {
    transform: translateY(-50%);
  }
`


const fold = () => `
  -webkit-animation: fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
          animation: fold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
  transform-style: preserve-3d;
`

const unfold = () => `
  -webkit-animation: unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
          animation: unfold 0.6s cubic-bezier(0.455, 0.03, 0.515, 0.955) 0s 1 normal forwards;
  transform-style: preserve-3d;
`

type FlipCardProps = {
  isFold?: boolean,
  isUnfold?: boolean,
}

export const FlipCard = ({ isFold = false, isUnfold = false }: FlipCardProps) => styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  height: 50%;
  overflow: hidden;
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;

  span {
    font-family: "Droid Sans Mono", monospace;
    font-size: 5em;
    font-weight: lighter;
    color: #333333;
  }

  ${isFold === true && FoldContent}
  ${isUnfold === true && UnfoldContent}

`

const UnfoldContent = styled.div`
  top: 50%;
  align-items: flex-start;
  transform-origin: 50% 0%;
  transform: rotateX(180deg);
  background-color: white;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border: 0.5px solid whitesmoke;
  border-top: 0.5px solid whitesmoke;

  span {
    transform: translateY(-50%);
  }

  @-webkit-keyframes & {
    0% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }
  @keyframes & {
    0% {
      transform: rotateX(180deg);
    }
    100% {
      transform: rotateX(0deg);
    }
  }

  ${unfold}
`

const FoldContent = styled.div`
  top: 0%;
  align-items: flex-end;
  transform-origin: 50% 100%;
  transform: rotateX(0deg);
  background-color: white;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 0.5px solid whitesmoke;
  border-bottom: 0.5px solid whitesmoke;

  & span {
    transform: translateY(50%);
  }

  @-webkit-keyframes & {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-180deg);
    }
  }

  @keyframes & {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(-180deg);
    }
  }

  ${fold}
`





 -->
