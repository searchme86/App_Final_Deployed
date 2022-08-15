import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { ProductSelector } from '../../../../../Store/ProductStore/ProductSlice';

import {
  getRelatedProducts,
  getSingleProduct,
} from '../../../../../Store/ProductStore/ProductThunks';

import { useParams } from 'react-router-dom';

import ProductProcessDetailState from './ProductProcessDetailState';

function ProductDetailState() {
  const {
    product: {
      product,
      product: { pdBrand, pdType },
    },
  } = useSelector(ProductSelector);

  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, []);

  useEffect(() => {
    if (!product) return;
    product && dispatch(getRelatedProducts({ Brand: pdBrand, Type: pdType }));
  }, [dispatch, product, pdBrand, pdType]);

  const pageInfo = {
    pageTitle: '상세 페이지',
    pageDes: '상품의 상세정보를 확인할 수 있습니다.',
  };

  const {
    relatedItems,
    pictureData,
    userData,
    userProductInfo,
    userControlData,
    userAction,
  } = ProductProcessDetailState();

  return [
    pageInfo,
    relatedItems,
    pictureData,
    userData,
    userProductInfo,
    userControlData,
    userAction,
  ];
}

export default ProductDetailState;
