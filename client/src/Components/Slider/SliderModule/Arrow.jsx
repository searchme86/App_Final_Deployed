import React from 'react';
import { OffScreenStrong } from '../../../Assets/Styles/Common.style';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';

import leftArrow from '../SliderData/left-arrow.png';
import rightArrow from '../SliderData/right-arrow.png';
import { ButtonArrow } from '../Slider.style';

function Arrow({ direction, handleClick }) {
  return (
    <ButtonArrow direction={direction} onClick={handleClick}>
      {direction === 'right' ? (
        <>
          <OffScreenStrong>오른쪽 화살표</OffScreenStrong>
          <ImageHolder>
            <Image src={rightArrow} alt={'오른쪽 화살표'} />
          </ImageHolder>
        </>
      ) : (
        <>
          <OffScreenStrong>왼쪽 화살표</OffScreenStrong>
          <ImageHolder>
            <Image src={leftArrow} alt={'왼쪽 화살표'} />
          </ImageHolder>
        </>
      )}
    </ButtonArrow>
  );
}

export default Arrow;
