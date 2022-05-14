import React from 'react'
import * as S from './styles'

export type ImageProp = {
  src: string;
  alt: string;
  width: string;
  height: string;
}

export type GalleryProps = {
  images: ImageProp[]
}

const Gallery = ({images}: GalleryProps) => {
  return (
    <S.Container>
      {
        images?.map((item) =>
          <S.Box>
            <img src={item.src} alt={item.alt} />
          </S.Box>
        )
      }
    </S.Container>
  )
}

export default Gallery