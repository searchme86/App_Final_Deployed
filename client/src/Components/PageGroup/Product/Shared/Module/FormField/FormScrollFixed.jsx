import React from 'react';

import { FlexAlignDiv } from '../../../../../../Pages/Product/ProductUpload.style.js';

import { PFormContent } from '../../../../../../Assets/Styles/Form.style.js';

function FormScrollFixed({ children }) {
  return (
    <FlexAlignDiv fixed>
      <PFormContent>{children}</PFormContent>
    </FlexAlignDiv>
  );
}

export default FormScrollFixed;
