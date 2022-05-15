import React from 'react'
import * as S from './styles'
import { setConfig, buildUrl } from 'cloudinary-build-url'


export type ImageProp = {
  src: string;
  alt: string;
}

export type GalleryProps = {
  images: ImageProp[]
}

setConfig({
  cloudName: 'dje6m1lab'
})

const Gallery = ({images}: GalleryProps) => {

  return (
    <S.Container>
      {
        images?.map((item, index) => {
          const src = buildUrl(item.src, {})

          return (<S.Box key={index}>
            <img src={src} alt={item.alt} />
          </S.Box>)
        })
      }
    </S.Container>
  )
}

export default Gallery