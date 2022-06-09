import styled from "styled-components";
import media from "styled-media-query";


export const HoneymoonContent = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
  margin-right: 100px;

  ${media.between("small","medium")`
    margin-left: 20px;
    margin-right: 20px;
`}
`

export const HoneymoonPixImage = styled.div`
  text-align: center;
  margin-bottom: 50px;
  background: #ddd6d6;
  padding: 10px;
`

export const Title = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 34px;
  letter-spacing: 4px;
`

export const HoneymoonSubtitle = styled.div`
  margin-top: 20px;
  margin-bottom: 50px;
`

export const CardItem = styled.span`
  margin-top: 20px;
  margin-bottom: 50px;
  margin-right: 20px;
`

export const ImageCover = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;

  ${media.lessThan("medium")`
    height: 250px;
    width: 100%;
  `}

`