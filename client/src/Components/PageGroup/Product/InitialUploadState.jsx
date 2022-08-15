import { useState } from 'react';

import { useSelector } from 'react-redux';

import { ProductSelector } from '../../../Store/ProductStore/ProductSlice';
import { AuthSelector } from '../../../Store/AuthStore/AuthSlice';

function InitialUploadState() {
  const {
    product: { ProductSize, ProductDegree },
  } = useSelector(ProductSelector);

  const {
    auth: {
      user: {
        newUser: { imageFile, nickname },
      },
    },
  } = useSelector(AuthSelector);

  const [pdSize, setPdSize] = useState([{ pdSize: '', pdPriceBySize: '' }]);

  return [imageFile, nickname, pdSize, setPdSize, ProductSize, ProductDegree];
}

export default InitialUploadState;
