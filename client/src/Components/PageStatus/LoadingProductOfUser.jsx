import React from 'react';

import { SkeletonList, SkeletonLi } from '../../Assets/Styles/Skeleton.style';

import { Skeleton } from '@chakra-ui/react';

function LoadingProductOfUser() {
  return (
    <SkeletonList>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
      <SkeletonLi>
        <Skeleton width="100%" height="100%" />
      </SkeletonLi>
    </SkeletonList>
  );
}

export default LoadingProductOfUser;
