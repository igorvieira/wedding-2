import buildUrl from "cloudinary-build-url";
import Content from "../../components/Content";
import { FormEmail } from "../../components/FormEmail";
import * as S from './styles'

const OUR_HISTORY = '070_Bruna_Igor_28042022_ktml8k.jpg'

export default function ToTheBrideAndGroom() {
  return (
    <Content>
       <S.ImageCover
        src={buildUrl(OUR_HISTORY, {})}
        alt="background"
      />

      <div>
        <div>
          {/* <img  src={buildUrl(OUR_HISTORY, {})} alt='hey' /> */}
        </div>
        <div>
          <FormEmail />
        </div>
      </div>
    </Content>
  );
}