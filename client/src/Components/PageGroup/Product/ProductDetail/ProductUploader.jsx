import React from 'react';

import {
  PdetailUser,
  PdetailUserSection,
  PdetailUserNicName,
  PdetailUserAddress,
} from '../../../../Pages/Product/ProductDetail.style';

import { ImageHolder, Image } from '../../../../Assets/Styles/Image.style';

function ProductUploader({ userData }) {
  const { pdUploaderImage, pdUploaderNickname, pdAddress } = userData;

  return (
    <PdetailUser>
      <ImageHolder br="100%" style={{ width: '65px', height: '65px' }}>
        <Image src={pdUploaderImage} alt={pdUploaderNickname} />
      </ImageHolder>
      <PdetailUserSection>
        <PdetailUserNicName>{pdUploaderNickname}</PdetailUserNicName>
        <PdetailUserAddress>{pdAddress}</PdetailUserAddress>
      </PdetailUserSection>
    </PdetailUser>
  );
}

export default ProductUploader;
