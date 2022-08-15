import React from 'react';
import { OffScreenTitle } from '../../Assets/Styles/Common.style';
import {
  SectionContent,
  SectionLayout,
  SectionUnit,
} from '../../Config/Layout/Layout.style';
import {
  NotFoundContainer,
  NotFoundTitle,
  NotFoundTitleDes,
} from './NotFound.style';

function NotFound() {
  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>Page not Found</OffScreenTitle>
        <SectionContent>
          <NotFoundContainer>
            <NotFoundTitle>Oops!</NotFoundTitle>
            <NotFoundTitleDes>잘못된 경로로 접근하셨네요?....</NotFoundTitleDes>
          </NotFoundContainer>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default NotFound;
