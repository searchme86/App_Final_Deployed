import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SectionPageWithDes from '../../Components/SectionLayOut/SectionPageWithDes';

import { ProductLayOut } from './CategoryProduct.style';

import { ProductSelector } from '../../Store/ProductStore/ProductSlice';
import { productByCategory } from '../../Store/ProductStore/ProductThunks';

import CardProduct from '../../Components/PageGroup/Product/CardProduct';

function CategoryProduct() {
  const {
    product: {
      category: { categoryItem },
    },
  } = useSelector(ProductSelector);

  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    id && dispatch(productByCategory({ id }));
  }, []);

  const pageInfo = {
    pageTitle: id,
    pageDes: '카테고리 상품을 확인할 수 있습니다.',
  };

  return (
    <SectionPageWithDes sectionData={pageInfo}>
      {categoryItem?.length > 0 ? (
        <ProductLayOut>
          {categoryItem.map((item, index) => (
            <CardProduct key={item._id} {...item} />
          ))}
        </ProductLayOut>
      ) : (
        <p>해당 카테고리로 등록된 상품이 존재하지 않습니다.</p>
      )}
    </SectionPageWithDes>
  );
}

export default CategoryProduct;
