import React from 'react';
import { OffScreenStrong } from '../../../Assets/Styles/Common.style';
import { Play } from '../Slider.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';

function SliderPlay({ handlePlay }) {
  return (
    <Play onClick={handlePlay}>
      <OffScreenStrong>슬라이드 자동재생 버튼</OffScreenStrong>
      <FontAwesomeIcon
        icon={faCirclePlay}
        style={{ fontSize: '30px', color: '#d6de00' }}
      />
    </Play>
  );
}

export default SliderPlay;
