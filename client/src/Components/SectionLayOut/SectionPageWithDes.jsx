import React from 'react';
import {
  SectionLayout,
  SectionTitle,
  SectionUnit,
  SectionContent,
  SectionTitleDes,
} from '../../Config/Layout/Layout.style';

function SectionPageWithDes({ sectionData, children }) {
  const { pageTitle, pageDes } = sectionData;
  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>{pageTitle}</SectionTitle>
        <SectionTitleDes>{pageDes}</SectionTitleDes>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionPageWithDes;
