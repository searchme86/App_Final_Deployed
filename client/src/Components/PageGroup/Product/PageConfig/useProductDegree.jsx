import React from 'react';

import { useSelector } from 'react-redux';

import { ProductSelector } from '../../../../../Store/ProductStore/ProductSlice';

function useProductDegree() {
  const {
    product: { ProductDegree },
  } = useSelector(ProductSelector);

  return ProductDegree;
}

export default useProductDegree;
