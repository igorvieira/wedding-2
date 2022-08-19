import buildUrl, { setConfig } from "cloudinary-build-url"
import { useState } from "react"
import Card from "../../components/Card"
import { Content } from "../../components/Content/styled"
import PaymentModal, { DescriptionProps } from "../Honeymoon/Modal"
import mock from "./mock"
import * as S from "./styles"

setConfig({
  cloudName: 'dje6m1lab'
})

const OnLineCeremony = () => {

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


  return (
    <div>
    <Content>
      <div>
        <S.Description>
        <iframe width="100%"
          height="315"
          src="https://www.youtube.com/embed/9jJqEHV6yiY"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        >

          </iframe>
        </S.Description>
      </div>
      <S.TitleHistory>Cerimônia Online</S.TitleHistory>
      <S.OnLineSubtitle>
        Você pode está contribuindo para a nossa Lua de Mel através de QRCode ou Copiando e colando o link abaixo. Por favor, aprecie e esteja participando conosco. =]
      </S.OnLineSubtitle>
      <S.OnLineContent>
        {
          mock?.map((item, index) => {
            const banner = buildUrl(item.banner, {
              transformations: {
                resize: {
                  width: '250',
                  height: '250',
                }
              }})

            const qrcode = buildUrl(item.url, {
              transformations: {
                resize: {
                  width: '150',
                  height: '150',
                }
            }})
            return (
              <S.CardItem key={index} onClick={() => {
                setDescription(item)
                openModal()
              }}>
                <Card
                  text={item.text}
                  url={qrcode}
                  banner={banner}
                  description={item.description}
                />
              </S.CardItem>
            )
          })
        }

      </S.OnLineContent>

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
  )
}

export default OnLineCeremony