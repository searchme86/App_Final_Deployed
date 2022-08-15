import React, { useEffect } from 'react';

import SectionColorPageWithOffTitle from '../../Components/SectionLayOut/SectionColorPageWithOffTitle';
import { ProductLayOut } from './SectionProduct.style';

import { useDispatch, useSelector } from 'react-redux';
import { getlistProducts } from '../../Store/ProductStore/ProductThunks';
import { ProductSelector } from '../../Store/ProductStore/ProductSlice';

import CardProduct from '../../Components/PageGroup/Product/CardProduct';

import NoDataDefaultProductList from '../../Components/PageStatus/NoDataDefaultProductList';
import Loading from '../../Components/Loading';
import ViewMore from '../../Components/ViewMore';

function SectionProduct() {
  const {
    product: { products, loading },
  } = useSelector(ProductSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getlistProducts({}));
  }, []);

  const pageInfo = {
    offTitle: '신규 등록된 상품 리스트',
    backgroundColor: '#f2ead7',
  };

  const linkInfo = {
    href: '/productList',
    linkText: '상품 더보기',
  };

  return (
    <SectionColorPageWithOffTitle sectionData={pageInfo}>
      {!loading ? (
        products.length > 0 ? (
          <>
            <ProductLayOut>
              {products &&
                products.map((item) => (
                  <CardProduct key={item._id} {...item} />
                ))}
            </ProductLayOut>
            {products.length > 0 && <ViewMore linkInfo={linkInfo} />}
          </>
        ) : (
          <NoDataDefaultProductList />
        )
      ) : (
        <Loading />
      )}
    </SectionColorPageWithOffTitle>
  );
}

export default SectionProduct;
