import styled from "styled-components";
import media from "styled-media-query";


export const Container = styled.div`
  width: 100%;
  padding: 4% 2%;
  box-sizing: border-box;
  min-height: 70vh;

  ${
    media.greaterThan('small')`
      display: flex;
      height: 70vh;
  `}
`

export const Box = styled.div`
  flex: 1;
  overflow: hidden;
  transition: .7s;
  margin: 0 2%;
  box-shadow: 0 20px 30px rgba(0,0,0,.1);
  line-height: 0;

  & > img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 20px;
  }

  ${
    media.greaterThan('small')`
      flex-flow: row wrap;

      & > img {
        width: 200%;
        height: 100%;
        transition: .7s;
        object-fit: cover;
        cursor: pointer;
      }

      & > span {
        font-size: 3.8vh;
        display: block;
        text-align: center;
        line-height: 2.6;
      }

      &:hover {
        flex: 1 1 50%;
      }

      &:hover > img {
        width: 100%;
        height: 100%;
      }
    `
  }

`