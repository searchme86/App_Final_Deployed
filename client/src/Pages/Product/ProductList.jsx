import React, { useEffect } from 'react';

import { ProductLayOut, NoProduct, NoProductText } from './ProductList.style';

import { ImageHolder, Image } from '../../Assets/Styles/Image.style';

import defaultImage from '../../Assets/Images/cat01.jpeg';

import { useDispatch, useSelector } from 'react-redux';
import { productsByPage } from '../../Store/ProductStore/ProductThunks';
import {
  setCurrentPage,
  ProductSelector,
} from '../../Store/ProductStore/ProductSlice';

import { useLocation } from 'react-router-dom';
import Pagination from '../../Components/Pagination';
import CardProduct from '../../Components/PageGroup/Product/CardProduct';
import SectionPage from '../../Components/SectionLayOut/SectionPage';

function ProductList() {
  const {
    product: { products, currentPage, numberOfPages },
  } = useSelector(ProductSelector);

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();
  const searchQuery = query.get('searchQuery');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsByPage(currentPage));
  }, [dispatch, currentPage]);

  const pageInfo = {
    pageTitle: '신규 상품 둘러보기',
  };

  return (
    <SectionPage sectionData={pageInfo}>
      <>
        {products.length > 0 ? (
          <ProductLayOut>
            {products &&
              products.map((item) => <CardProduct key={item._id} {...item} />)}
          </ProductLayOut>
        ) : (
          <NoProduct>
            <ImageHolder width="570px">
              <Image src={defaultImage} alt="기본이미지" />
            </ImageHolder>
            <NoProductText>현재 등록된 상품이 없습니다.</NoProductText>
          </NoProduct>
        )}

        {products?.length > 0 && !searchQuery && (
          <Pagination
            setCurrentPage={setCurrentPage}
            numberOfPages={numberOfPages}
            currentPage={currentPage}
            dispatch={dispatch}
          />
        )}
      </>
    </SectionPage>
  );
}

export default ProductList;
