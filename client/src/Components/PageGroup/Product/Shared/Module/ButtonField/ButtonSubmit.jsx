import React from 'react';

import { PFormButton } from '../../../../../../Assets/Styles/Button.style.js';

function ButtonSubmit({ ButtonInfo }) {
  const { Attr } = ButtonInfo;

  return (
    <PFormButton type="submit" disabled={!Attr} canSubmit={Attr}>
      상품 등록하기
    </PFormButton>
  );
}

export default ButtonSubmit;
