import React from 'react';

import {
  SectionContent,
  SectionLayout,
  SectionTitle,
  SectionUnit,
} from '../../Config/Layout/Layout.style';

function SectionPage({ sectionData, children }) {
  const { pageTitle } = sectionData;

  return (
    <SectionUnit>
      <SectionLayout>
        <SectionTitle>{pageTitle}</SectionTitle>
        <SectionContent>{children}</SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionPage;
