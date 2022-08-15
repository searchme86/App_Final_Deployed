import React from 'react';

import {
  PdetailTags,
  PdetailTagItems,
  PdetailTag,
  PdetailItemDes,
  PdetailItemTitle,
  PdetailItemPrice,
  PdetailItemPriceBold,
} from '../../../../Pages/Product/ProductDetail.style';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

function ProductInfo({ userProductInfo }) {
  const { productSummary, pdStatus, pdDes, pdtags, pdTitle, pdPrice } =
    userProductInfo;

  return (
    <>
      <Breadcrumb as="ul" mt="5px">
        {productSummary &&
          productSummary.map((item, index) => (
            <>
              <BreadcrumbItem key={index}>
                <BreadcrumbLink
                  fontWeight="bold"
                  fontSize="18px"
                  marginRight="10px"
                >
                  {item}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          ))}
      </Breadcrumb>
      <PdetailTags>
        {pdStatus &&
          pdStatus.map((status, index) => (
            <PdetailTagItems key={index}>
              <PdetailTag>#{status}</PdetailTag>
            </PdetailTagItems>
          ))}
      </PdetailTags>
      <PdetailItemDes>[ {pdDes} ]</PdetailItemDes>
      <PdetailTags>
        {pdtags &&
          pdtags.map((tag, index) => (
            <PdetailTagItems key={index}>
              <PdetailTag>#{tag}</PdetailTag>
            </PdetailTagItems>
          ))}
      </PdetailTags>
      <PdetailItemTitle>{pdTitle}</PdetailItemTitle>
      <PdetailItemPrice>
        <PdetailItemPriceBold>
          {Number(pdPrice).toLocaleString('ko-KR')}
        </PdetailItemPriceBold>
        원
      </PdetailItemPrice>
    </>
  );
}

export default ProductInfo;
