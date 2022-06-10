

import buildUrl from 'cloudinary-build-url'
import { useState } from 'react'
import clipboardCopy from 'clipboard-copy'
import Modal from '../../../components/Modal'
import * as S from './styled'

export type DescriptionProps ={
  url: string
  alt: string
  description: string
  text: string
  banner: string
  pix: string
}

export type PaymentModalProps = {
  isModalOpen: boolean
  closeModal: () => void
  description: DescriptionProps
}

const PaymentModal = ({ isModalOpen, closeModal, description: item }: PaymentModalProps) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = (QRcode: string) => {
    clipboardCopy(QRcode)
    setIsCopied(true)

    setTimeout(() => setIsCopied(false), 3000)
  }


  return (
    <Modal isOpen={isModalOpen} closeModal={closeModal}>

      <S.ModalWrapper>
        <S.Title>Tranferência via Pix</S.Title>
        <p>Abra o leitor de Pix QRCode do seu Banco e escanei a imagem abaixo:</p>
        <S.ContentBanner>
          <S.ImageQRCode
            src={buildUrl(item.url, {})}
            alt={item.alt}
          />
          <S.ImageBanner
            src={buildUrl(item.banner, {})}
            alt={item.alt}
          />
        </S.ContentBanner>
        <S.Description>
          <S.Title>{item.description}</S.Title>
          <S.Text>
            {item.text}
          </S.Text>
          <S.PixCode onClick={() => handleCopy(item?.pix)}>
            <S.Pix>{`${item?.pix.slice(0, 30)}...`}</S.Pix>
            {isCopied ? (
              <S.Copied>
                Copiado
                <S.CopiedIcon />
              </S.Copied>
            ) : (
              <S.CopyButton onClick={() => handleCopy(item?.pix)}>
                Copiar <S.CopyIcon />
              </S.CopyButton>
            )}
          </S.PixCode>
        </S.Description>
      </S.ModalWrapper>
    </Modal>
  )
}

export default PaymentModal
