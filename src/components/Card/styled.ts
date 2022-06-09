import styled from "styled-components";
import media from "styled-media-query";


export const Content = styled.div`
  width: 250px;
  min-height: 300px;
  background: #ededed;
  border-radius: 4px;
  box-shadow: 0 20px 30px rgb(0 0 0 / 10%);
  margin-bottom: 20px;

  ${media.lessThan('medium')`
    width: 290px;
  `}
`

export const Banner = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const Text = styled.div`
  padding-bottom: 20px;
  font-weight: 700;
`

export const Price = styled.div`
  padding-bottom: 40px;
`

export const Description = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
`

export const Button = styled.div`
  width: 100%;
  background: rgb(67, 7, 89);
  color: #fff;
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
  text-align: center;
`