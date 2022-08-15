import React from 'react';

import { PdetailImage } from '../../../../Pages/Product/ProductDetail.style';

import { ImageHolder, Image } from '../../../../Assets/Styles/Image.style';

function ProductPicture({ pictureData }) {
  const { pdImage, pdTitle } = pictureData;
  return (
    <PdetailImage>
      <ImageHolder width="590px" height="480px" br="14px">
        <Image src={pdImage} alt={`${pdTitle} 이미지`} />
      </ImageHolder>
    </PdetailImage>
  );
}

export default ProductPicture;
