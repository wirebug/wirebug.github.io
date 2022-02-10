/* eslint-disable @next/next/no-img-element */
import React from 'react';

interface ImageProps {
    src: string;
    alt: string
}

const Image:React.FC<ImageProps> = ({src, alt}) => {
    return (
        <picture>
          <source srcSet={require(`../public/${src}?webp`)} type="image/webp" />
          <source srcSet={require(`../public/${src}`)} type="image/jpeg" />
          <img
            src={require(`../public/${src}`)}
            alt={alt}
          />
        </picture>

    )
}

export default Image;
