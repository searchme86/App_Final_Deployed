import React from 'react';
import {
  PdetailImage,
  PdetailInfo,
  PdetailUser,
  PdetailUserSection,
} from '../../Pages/Product/ProductDetail.style';

import { ImageHolder } from '../../Assets/Styles/Image.style';

import { Skeleton, SkeletonCircle } from '@chakra-ui/react';

function LoadingProductDetail() {
  return (
    <>
      <PdetailImage>
        <Skeleton width="100%" height="100%" />
      </PdetailImage>
      <PdetailInfo>
        <PdetailUser>
          <ImageHolder width="64px" br="100%">
            <SkeletonCircle width="100%" height="100%" />
          </ImageHolder>
          <PdetailUserSection>
            <Skeleton marginTop="5px" marginBottom="5px" height="30px" />
            <Skeleton marginBottom="5px" height="30px" />
          </PdetailUserSection>
          <Skeleton marginBottom="5px" height="27px" />
          <Skeleton marginBottom="5px" height="34px" />
          <Skeleton marginBottom="5px" height="29px" />
          <Skeleton marginBottom="5px" height="37px" />
          <Skeleton marginBottom="5px" height="47px" />
          <Skeleton marginBottom="5px" height="115px" />
          <Skeleton marginBottom="5px" height="72px" />
          <Skeleton marginBottom="5px" height="54px" />
        </PdetailUser>
      </PdetailInfo>
    </>
  );
}

export default LoadingProductDetail;
