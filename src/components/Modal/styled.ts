import { Cancel } from 'iconoir-react'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type OverlayProps = {
  isOpen: boolean
  isBottom: boolean
}

const overlayModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

export const Overlay = styled.div<OverlayProps>`
  ${({ isOpen, isBottom }) => css`
    display: ${isBottom ? 'block' : 'none'};
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    background: #000E1A80;
    transition: opacity 0.3s ease-in-out;
    z-index: 20;

    ${isOpen && overlayModifiers.open()}
    ${!isOpen && overlayModifiers.close()}

    ${media.greaterThan('small')`
      display: block;
    `}
  `}
`

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,
  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}

type ModalProps = {
  isOpen: boolean
  isBottom: boolean
}

export const Modal = styled.div<ModalProps>`
  ${({ isOpen, isBottom }) => css`
    position: fixed;
    max-width: 100vw;
    max-height: 100vh;
    right: 0;
    bottom: 0;
    left: 0;
    will-change: transform;
    transition: opacity 0.3s ease-in-out;
    background: #ffffff;
    z-index: 40;
    padding-bottom: env(safe-area-inset-bottom);
    overflow-y: auto;
    overflow-x: hidden;

    ${isBottom &&
    css`
      border-radius: 1.6rem 1.6rem 0 0;
    `};

    ${!isBottom &&
    css`
      top: 0;
    `};

    ${media.greaterThan('small')`
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: fit-content;
      height: fit-content;
      max-height: 100vh;
      border-radius: 1.6rem;
    `}

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`
type CloseButtonProps = {
  notRounded?: boolean
}

export const CloseButton = styled.button<CloseButtonProps>`
  ${({ notRounded = false }) => css`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    top: 2.4rem;
    right: 1.6rem;
    border: none;
    background: ${!notRounded ? '#fff' : 'transparent'};
    cursor: pointer;
    z-index: 40;
    transition: opacity 0.1s ease-in-out;
    box-shadow: ${!notRounded ? '0 0.5rem 1rem rgba(0, 0, 0, 0.1)' : 'none'};

    &:hover {
      opacity: 50%;
    }

    &:focus {
      outline-color: #ededed;
    }

    ${media.greaterThan('small')`
      right: 1.6rem;
      top: 1.6rem;
    `}
  `}
`

export const CloseIcon = styled(Cancel)`
  ${({ theme }) => css`
    color: #ededed;
    width: 2.4rem;
    height: 2.4rem;
  `}
`
