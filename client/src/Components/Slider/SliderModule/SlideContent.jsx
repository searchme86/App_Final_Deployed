import React from 'react';
import { SContent } from '../Slider.style';

function SliderContent({ translate, transition, width, children }) {
  return (
    <SContent width={width} translate={translate} transition={transition}>
      {children}
    </SContent>
  );
}

export default SliderContent;
