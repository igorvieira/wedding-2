import styled from "styled-components";
import media from "styled-media-query";


export const ImageCover = styled.img`
width: 100%;
height: 400px;
object-fit: cover;

  ${media.lessThan("medium")`
    height: 250px;
    width: 100%;
  `}

`