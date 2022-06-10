import buildUrl from "cloudinary-build-url";
import Content from "../../components/Content";
import { FormEmail } from "../../components/FormEmail";
import * as S from './styles'

const OUR_HISTORY = '070_Bruna_Igor_28042022_ktml8k.jpg'

export default function ToTheBrideAndGroom() {
  return (
    <Content>
       <S.ImageCover
        src={buildUrl(OUR_HISTORY, {
          transformations: {
            resize: {
              width: '1080',
              type: 'scale'
            }
          }
        })}
        alt="background"
      />

      <div>
        <S.TitleHistory>Mensagem aos Noivos</S.TitleHistory>
        <hr/>
        <S.Content>
          <FormEmail />
        </S.Content>
      </div>
    </Content>
  );
}