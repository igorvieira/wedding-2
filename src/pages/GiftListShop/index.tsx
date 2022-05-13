
import { Content } from "../../components/Content/styled"
import mock from "./mock"
import * as S from './styles'

const GiftListShop = () => {
  return <div>
    <Content>
      <S.ShoppingContent>
        {
          mock.map((item, index) =>
            <a key={index} href={item.url} >
              <S.ShoppingGift >
                <S.ShoppingImage>
                  <img
                    src={item.src}
                    alt={item.altName}
                    width={200}
                    height={200}
                  />
                </S.ShoppingImage>
              </S.ShoppingGift>
            </a>
          )
        }
      </S.ShoppingContent>
    </Content>
  </div>
}

export default GiftListShop