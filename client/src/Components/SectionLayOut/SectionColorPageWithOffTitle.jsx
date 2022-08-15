import React from 'react';

import {
  SectionContent,
  SectionLayout,
  SectionUnit,
} from '../../Config/Layout/Layout.style';

import { OffScreenTitle } from '../../Assets/Styles/Common.style';

function SectionColorPageWithOffTitle({ sectionData, children }) {
  const { offTitle, backgroundColor } = sectionData;

  return (
    <SectionUnit color={backgroundColor}>
      <SectionLayout>
        <OffScreenTitle>{offTitle}</OffScreenTitle>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionColorPageWithOffTitle;
