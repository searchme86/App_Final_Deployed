import React from 'react';

import { PFormButton } from '../../../../../../Assets/Styles/Button.style.js';

function ButtonNormal({ ButtonInfo }) {
  const { handler } = ButtonInfo;

  return (
    <PFormButton type="button" onClick={handler}>
      상품페이지 미리보기
    </PFormButton>
  );
}

export default ButtonNormal;
