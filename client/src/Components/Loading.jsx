import React from 'react';
import styled from 'styled-components';

import { OffScreenSpan } from '../Assets/Styles/Common.style';

import { Spinner } from '@chakra-ui/react';

const LoadingContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Loading() {
  return (
    <LoadingContainer>
      <OffScreenSpan>로딩 스피너</OffScreenSpan>
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    </LoadingContainer>
  );
}

export default Loading;
