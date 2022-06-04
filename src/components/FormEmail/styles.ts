import styled from "styled-components";
import media from "styled-media-query";



export const ContentForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Form = styled.div`
  width: 70%;

  ${media.lessThan("medium")`
    width: 100%;
  `}
`

export const Input = styled.input`
  margin-bottom: 20px;
  border: none;
  outline: none;
  background: transparent;
  border-bottom: 1px solid;
  padding-bottom: 15px;
  font-size: 16px;
`

export const TextArea = styled.textarea`
  min-height: 250px;
  font-size: 16px;
  background: transparent;
  border-radius: 4px;
  padding-top: 14px;
  padding-left: 14px;
  outline: none;
`

export const Button = styled.button`
  margin-top: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
  background: #430759;
  color: #fff;
  letter-spacing: 4px;
  border: none;
  outline: none;
  cursor: pointer;
`