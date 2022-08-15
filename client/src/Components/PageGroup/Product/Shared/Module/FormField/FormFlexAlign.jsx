import React from 'react';

import { FlexAlignDiv } from '../../../../../../Pages/Product/ProductUpload.style.js';

import { PFormContent } from '../../../../../../Assets/Styles/Form.style.js';

function FormFlexAlign({ children }) {
  return (
    <FlexAlignDiv>
      <PFormContent>{children}</PFormContent>
    </FlexAlignDiv>
  );
}

export default FormFlexAlign;
