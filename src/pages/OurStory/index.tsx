import Content from "../../components/Content"
import { setConfig, buildUrl } from 'cloudinary-build-url'

import * as S from "./styles"

const OUR_HISTORY = '026_Bruna_Igor_28042022_1_r7isnm.jpg'

setConfig({
  cloudName: 'dje6m1lab'
})

const OurHistory = () => {
  return <div>
    <Content>
      <S.ImageCover
        src={buildUrl(OUR_HISTORY, {})}
        alt="background"
      />
      <S.TitleHistory>Nossa História</S.TitleHistory>
      <hr/>
      <div>
      <i>“A flor que desabrocha na adversidade é a mais bela de todas”</i> - Fa Zhou

      <p>
        Creio ter bastante sentido começar nossa história com essa frase, pois nos
        conhecemos em um momento de adversidade… o mundo estava assustado com a
        pandemia, muitas coisas ruins sendo noticiadas e as pessoas ainda se encontravam
        em um mundo perdido… mas, nosso amor se desabrochou, formou um lindo jardim,
        me atrevo a dizer que é o mais belo jardim de todos!
      </p>
      <p>
        Nosso Deus é bom em tudo que faz, nos deu a oportunidade de conhecer um
        ao outro, de nos apaixonarmos e amadurecer esse amor tão bonito e tão tranquilo.
        Durante um mês fomos amigos, nos conhecemos e conversamos bastante, foi
        um tempo hábil para tomarmos a decisão de iniciar um relacionamento, e que
        relacionamento, hein!! Nossa história é apaixonante, não pelas reviravoltas dignas
        de filme (sinceramente, nunca nos ocorreu rsrs) mas, é apaixonante pela
        tranquilidade, cumplicidade e amor que construímos durante esse tempo junto, o
        Senhor é o nosso pilar, nEle crescemos e amadurecemos! Todos os dias vencemos
        e por isso e tomamos a decisão de escolher um ao outro todos os dias, somos
        melhores juntos! Daqui a alguns meses iremos nos casar, diante de Deus e dos
        homens, testemunharemos esse amor e carinho que sentimos diante de amigos,
        familiares e irmãos em Cristo!
      </p>
      <p>
        O nosso amor é uma brisa suave, é afago e abraço quentinho!
        Diante disso queremos compartilhar com vocês amigos queridos, os detalhes
        do nosso casamento, estamos regozijantes com a chegada do grande dia e
        queremos contar com a presença de cada um de vocês!
      </p>
      <p>
        Com amor, <br/>
        Bruna e Igor.
      </p>
      </div>
    </Content>
  </div>
}

export default OurHistory