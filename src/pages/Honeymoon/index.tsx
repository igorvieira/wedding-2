import Content from '../../components/Content';
import mock from './mock';
import * as S from './styles'

const HoneymoonTemplate = () => {
  return <div>
    <Content>
      <S.HoneymoonTitle>Cotas</S.HoneymoonTitle>
      <hr />
      <S.HoneymoonSubtitle>
        Você pode está contribuindo para a nossa Lua de Mel através de QRCode ou Copiando e colando o link abaixo.
      </S.HoneymoonSubtitle>
      <S.HoneymoonContent>
        {mock.map((item, index) => (
          <S.HoneymoonPixImage key={index}>
            <img
              src={item.url}
              alt={item.alt}
              width={200}
              height={200}
            />
            <div>{item.text}</div>
          </S.HoneymoonPixImage>
        ))}
      </S.HoneymoonContent>
    </Content>
  </div>
}

export default HoneymoonTemplate