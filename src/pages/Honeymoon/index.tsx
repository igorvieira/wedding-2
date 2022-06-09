import buildUrl, { setConfig } from 'cloudinary-build-url';
import { useState } from 'react';
import Card from '../../components/Card';
import Content from '../../components/Content';
import mock from './mock';
import PaymentModal, { DescriptionProps } from './Modal';
import * as S from './styles'

const HoneymoonTemplate = () => {

  const DESCRIPTION_INITIAL_STATE = {
    url: '',
    alt: '',
    description: '',
    text: '',
    banner: '',
    pix: '',
  }

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [description, setDescription] = useState<DescriptionProps>(DESCRIPTION_INITIAL_STATE)


  const closeModal = () => setIsModalOpen(false)
  const openModal = () => setIsModalOpen(true)


  const OUR_HISTORY = '039_Bruna_Igor_28042022_1_oikt39.jpg'

    setConfig({
      cloudName: 'dje6m1lab'
    })

  return <div>
    <Content>
      <S.ImageCover
        src={buildUrl(OUR_HISTORY, {})}
        alt="background"
      />
      <S.Title>Cotas</S.Title>
      <hr />
      <S.HoneymoonSubtitle>
        Você pode está contribuindo para a nossa Lua de Mel através de QRCode ou Copiando e colando o link abaixo.
      </S.HoneymoonSubtitle>
      <S.HoneymoonContent>

        {
          mock?.map((item, index) => {
            const src = buildUrl(item.banner, {})
            return (
              <S.CardItem key={index} onClick={() => {
                setDescription(item)
                openModal()
              }}>
                <Card
                  text={item.text}
                  banner={src}
                  description={item.description}
                />
              </S.CardItem>
            )
          })
        }

      </S.HoneymoonContent>

      <PaymentModal
        isModalOpen={isModalOpen}
        closeModal={() =>{
          closeModal()
          setDescription(DESCRIPTION_INITIAL_STATE)
        }}
        description={description}
      />
    </Content>
  </div>
}

export default HoneymoonTemplate