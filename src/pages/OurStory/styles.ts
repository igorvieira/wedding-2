import styled from "styled-components";
import media from "styled-media-query";


export const TitleHistory = styled.div`
  margin-top: 50px;
  margin-bottom: 20px;
  font-size: 34px;
  letter-spacing: 4px;
`

export const ImageCover = styled.img`
  width: 100%;
  height: 600px;
  object-fit: cover;

  ${media.lessThan("medium")`
    height: 250px;
    width: 100%;
  `}

`