
import buildUrl, { setConfig } from "cloudinary-build-url"
import { Content } from "../../components/Content/styled"
import mock from "./mock"
import * as S from './styles'


const OUR_HISTORY = '035_Bruna_Igor_28042022_1_iz3w2e.jpg'

setConfig({
  cloudName: 'dje6m1lab'
})

const GiftListShop = () => {
  return <div>
    <Content>
      <S.ImageCover
        src={buildUrl(OUR_HISTORY, {})}
        alt="background"
      />
      <S.Description>
        <S.Title>
          Convidados queridos, sejam bem vindos a nossa lista de presentes
        </S.Title>
        <hr />
        <p>Preparamos cada lista com carinho e atenção, caso queiram sintam-se à vontade
        para nos presentear seja com presentes físicos ou escolhendo algum item de nossa
        lista. Os sites estão abaixo:</p>
      </S.Description>
      <S.ShoppingContent>
        {
          mock?.map((item, index) => {
            const src = buildUrl(item.src, {})
            return (
              <a key={index} href={item.url} >
                <S.ShoppingGift>
                  <S.ShoppingImage
                    src={src}
                    alt={item.altName}
                  />
                </S.ShoppingGift>
              </a>
            )
          })
        }
      </S.ShoppingContent>
    </Content>
  </div>
}

export default GiftListShop