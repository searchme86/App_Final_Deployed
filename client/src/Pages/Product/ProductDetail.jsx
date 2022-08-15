import React from 'react';
import { PdetailContainer, PdetailInfo } from './ProductDetail.style';

import { useSelector } from 'react-redux';
import { ProductSelector } from '../../Store/ProductStore/ProductSlice';

import SectionRelated from '../../Components/SectionLayOut/SectionRelated';
import SectionPageWithDes from '../../Components/SectionLayOut/SectionPageWithDes';
import ProductDetailState from '../../Components/PageGroup/Product/ProductDetail/DetailState/ProductDetailState';

import ProductPicture from '../../Components/PageGroup/Product/ProductDetail/ProductPicture';
import ProductUploader from '../../Components/PageGroup/Product/ProductDetail/ProductUploader';
import ProductInfo from '../../Components/PageGroup/Product/ProductDetail/ProductInfo';
import ProductDataControl from '../../Components/PageGroup/Product/ProductDetail/ProductDataControl';
import ProductUserAction from '../../Components/PageGroup/Product/ProductDetail/ProductUserAction';

import LoadingProductDetail from '../../Components/PageStatus/LoadingProductDetail';
import CardProduct from '../../Components/PageGroup/Product/CardProduct';

function ProductDetail() {
  const {
    product: { loading },
  } = useSelector(ProductSelector);

  const [
    pageInfo,
    relatedItems,
    pictureData,
    userData,
    userProductInfo,
    userControlData,
    userAction,
  ] = ProductDetailState();

  return (
    <>
      <SectionPageWithDes sectionData={pageInfo}>
        <PdetailContainer>
          {!loading ? (
            <>
              <ProductPicture pictureData={pictureData} />
              <PdetailInfo>
                <ProductUploader userData={userData} />
                <ProductInfo userProductInfo={userProductInfo} />
                <ProductDataControl userControlData={userControlData} />
                <ProductUserAction userAction={userAction} />
              </PdetailInfo>
            </>
          ) : (
            <LoadingProductDetail />
          )}
        </PdetailContainer>
      </SectionPageWithDes>

      {/* 관련상품 보기 */}
      <>
        {relatedItems.length > 0 && (
          <SectionRelated>
            {relatedItems &&
              relatedItems.map((related, index) => (
                <CardProduct key={index} {...related} />
              ))}
          </SectionRelated>
        )}
      </>
    </>
  );
}

export default ProductDetail;
