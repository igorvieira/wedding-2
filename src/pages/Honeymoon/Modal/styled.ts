import {
  QuestionMarkCircle,
  Copy,
  Check,
} from 'iconoir-react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.div`
  flex: 1;
`

export const ContentBanner = styled.div`
  display: flex;

  ${media.lessThan('medium')`
    flex-flow: row wrap;
  `}
`

export const Content = styled.main`
  ${() => css`
    padding-bottom: 1.6rem;

    ${media.greaterThan('small')`
      margin: 0 auto;
      padding: 0;
      padding-top: 2.4rem;
      padding-bottom: 1.2rem;
      max-width: 38.5rem;
    `}
  `}
`

export const Title = styled.h1`
  ${() => css`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 3rem;
    margin-bottom: 0.8rem;
  `}
`

export const Description = styled.p`
  ${() => css`
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
    margin-bottom: 2.4rem;
  `}
`

export const Subtitle = styled.h3`
  ${() => css`
    font-size: 400;
    font-weight: 500;
    line-height: 2.4rem;
    margin-bottom: 0.8rem;
  `}
`

export const Paragraph = styled.p`
  ${() => css`
    font-size: 1.4rem;
    font-weight: 500;
    color: #7B7B7B;
    line-height: 2.2rem;
    margin-bottom: 1.6rem;

    & > strong {
      color: #000;
    }
  `}
`

export const PixCode = styled.p`
  ${() => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 1.6rem;
    border-radius: 1.6rem;
    border: 1px dashed rgba(0, 0, 0, 0.23);
    padding: 1rem 0.5rem;
    cursor: pointer;
    background: #734484eb;
    color: #fff;

    &:hover {
      ${CopyButton} {
        opacity: 70%;
      }
    }
  `}
`

export const Pix = styled.span`
  ${() => css`
  font-size: 1rem;
  font-weight: 500;
  line-height: 2.2rem;
  padding-left: 16px;
  padding-right: 1rem;

    ${media.lessThan('medium')`
      font-size: 12px;
    `}
  `}
`
export const CopyButton = styled.button`
  ${() => css`
    display: flex;
    align-items: center;
    border: none;
    background: none;
    width: fit-content;
    color: #ededed;;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2.2rem;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 70%;
    }

    & > svg {
      margin-left: 0.4rem;
    }
  `}
`

export const Copied = styled.span`
  ${() => css`
    display: flex;
    align-items: center;
    width: fit-content;
    color: #ededed;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2.2rem;

    & > svg {
      margin-left: 0.4rem;
    }
  `}
`

export const CopiedIcon = styled(Check)`
  width: 1.8rem;
  height: 1.8rem;
`

export const CopyIcon = styled(Copy)`
  width: 1.8rem;
  height: 1.8rem;
`

export const QuestionIcon = styled(QuestionMarkCircle)`
  ${() => css`
    color: #ededed;;
    width: 2rem;
    height: 2rem;
  `}
`

export const Button = styled.button`
  ${() => css`
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: none;
    background: transparent;
    color: #ededed;;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 2rem;
    margin-bottom: 2.4rem;

    ${QuestionIcon} {
      margin-right: 0.8rem;
    }
  `}
`

export const Divisor = styled.hr`
  margin-top: 25px;
  padding-left: 15px;
  padding-right: 15px;
`

export const ModalWrapper = styled.article`
  ${() => css`
    padding: 3rem 1.6rem 0;
    height: 150vh

    ${media.greaterThan('small')`
      max-width: 640px;
      padding: 3rem 3.2rem 20rem;
    `}
  `}
`

export const Text = styled.div`
    font-size: 1rem;
`
