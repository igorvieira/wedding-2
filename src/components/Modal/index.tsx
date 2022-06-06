import { useEffect } from 'react'

import * as S from './styled'

export type ModalProps = {
  isOpen?: boolean
  closeModal: () => void
  children?: React.ReactNode
  notRounded?: boolean
  isBottom?: boolean
}

const Modal = ({
  isOpen = false,
  closeModal,
  children,
  notRounded = false,
  isBottom = false,
  ...props
}: ModalProps) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeModal()
    }

    document.addEventListener('keydown', handleKeyDown as EventListener)
    return () =>
      document.removeEventListener('keydown', handleKeyDown as EventListener)
  })

  return (
    <>
      <S.Modal
        isOpen={isOpen}
        isBottom={isBottom}
        aria-hidden={!isOpen}
        role="dialog"
        aria-modal="true"
        {...props}
      >
        <S.CloseButton
          onClick={(e) => {
            e.stopPropagation()
            closeModal()
          }}
          aria-label="fechar modal"
          notRounded={notRounded}
        >
          <S.CloseIcon />
        </S.CloseButton>
        {children}
      </S.Modal>
      <S.Overlay
        isOpen={isOpen}
        aria-hidden={!isOpen}
        onClick={(e) => {
          e.stopPropagation()
          closeModal()
        }}
        isBottom={isBottom}
      />
    </>
  )
}

export default Modal
