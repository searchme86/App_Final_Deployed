import React from 'react';

import { OffScreenTitle } from '../Assets/Styles/Common.style';
import {
  SectionContent,
  SectionLayout,
  SectionUnit,
} from '../Config/Layout/Layout.style';

import Slider from '../Components/Slider/Slider';
import Text from '../Components/Text/Text';

function SectionMain() {
  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>메인 슬라이더</OffScreenTitle>
        <SectionContent>
          <div className="" style={{ display: 'flex' }}>
            <Slider autoPlay={2} />
            <Text />
          </div>
        </SectionContent>
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionMain;
