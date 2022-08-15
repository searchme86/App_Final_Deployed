import React from 'react';
import {
  SectionLayout,
  SectionTitle,
  SectionUnit,
  SectionContent,
  SectionTitleDes,
} from '../../Config/Layout/Layout.style';

import { RelatedSection } from '../../Pages/Product/ProductDetail.style.js';

function SectionRelated({ children }) {
  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>관련상품 보기</SectionTitle>
        <SectionTitleDes>
          <strong>브랜드</strong> 혹은 <strong>상품타입</strong>이 동일한 상품을
          확인할 수 있습니다.
        </SectionTitleDes>
        <SectionContent>
          <RelatedSection>{children}</RelatedSection>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionRelated;
