import { useEffect, useState } from "react";
import { HomeContent } from "./Home";
import * as S from './styles'

export default function Home() {

  const [ visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(false), 5000)
    setVisible(true)
  },[])

  return (
    <div>
      {
         visible ? <S.LoadImage>
          <img src='https://res.cloudinary.com/dje6m1lab/image/upload/v1654862912/monophy_lvvqu2.gif' alt='hey' />

          <div>Loading...</div>
         </S.LoadImage>
      : <HomeContent />
      }
    </div>
  );
}