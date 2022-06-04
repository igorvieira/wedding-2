import buildUrl, { setConfig } from "cloudinary-build-url"
import { Content } from "../../components/Content/styled"
import Map from "../../components/Map"
import * as S from "./styles"

const OUR_HISTORY = 'church_g1bh37.png'

setConfig({
  cloudName: 'dje6m1lab'
})

const Ceremony = () => {

  return <div>
    <Content>
      <S.ImageCover
        src={buildUrl(OUR_HISTORY, {})}
        alt="background"
      />
      <S.TitleHistory>Igreja Batista do Barro Preto</S.TitleHistory>
      <hr/>
      <div>
        <S.Description>Nós ficamos felizes e honrados com a sua presença em nosso casamento,
          o mesmo se dará no dia 20 de agosto de 2022 a partir das 19:30 horas, na <strong> Av. Augusto de Lima 1962</strong> e
          abaixo se encontram as recomendações para hoteis e o endereço onde será realizado a cerimônia religiosa,
          novamente, somos gratos pela vidas de vocês e pelo carinho em estar participando desse
          que é um momento tão especial em nossas vidas.
        </S.Description>

        <div>
          <Map />
        </div>

        {/* <S.ContentInfo>
          <div>
            <ul>
              <li>
                Hotel San Diego
              </li>
              <li>
                Ibis Hotel
              </li>
            </ul>
          </div>
          <div>
            Mapa
          </div>
        </S.ContentInfo> */}
      </div>
    </Content>
  </div>
}

export default Ceremony