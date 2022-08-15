import React from 'react';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';
import { Sslide } from '../Slider.style.js';

function Slide(props) {
  const {
    content: { src, alt },
  } = props;

  return (
    <Sslide>
      <ImageHolder width="690px" height="100%">
        <Image src={src} alt={alt} />
      </ImageHolder>
    </Sslide>
  );
}

export default Slide;
