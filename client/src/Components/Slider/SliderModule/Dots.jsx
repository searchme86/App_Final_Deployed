import React from 'react';

import { OffScreenSpan } from '../../../Assets/Styles/Common.style';
import { DotWrapper, Dot, DotLi, DotList } from '../Slider.style.js';

import SliderPlay from '../SliderPlay/SliderPlay';
import SliderStop from '../SliderPlay/SliderStop';

function Dots({ slides, activeIndex, handlePlay, handleStop }) {
  return (
    <DotWrapper>
      <SliderStop handleStop={handleStop} />
      <DotList>
        {slides.map((slide, i) => (
          <DotLi key={slide.id}>
            <Dot key={slide.id} active={activeIndex === i}>
              <OffScreenSpan> {slide?.alt}</OffScreenSpan>
            </Dot>
          </DotLi>
        ))}
      </DotList>
      <SliderPlay handlePlay={handlePlay} />
    </DotWrapper>
  );
}

export default Dots;
