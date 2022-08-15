import React from 'react';

import {
  PCardCategory,
  PCardItem,
  PCardPrice,
  PCardTitle,
  PCardUser,
  PUserAddress,
  PUserImage,
  PUserInfo,
  PUserNickname,
} from '../PageGroup/Product/CardProduct.style';

import { ImageHolder, Image } from '../../Assets/Styles/Image.style';

import {
  RelatedInfo,
  ProductLayOut,
} from '../../Pages/Product/SectionProduct.style';

import defaultImage from '../../Assets/Images/cat01.jpeg';

const defaultData = [
  {
    src: defaultImage,
    category: '카테고리',
    price: '상품 가격',
    title: '상품 타이틀',
    user: '유저 닉네임',
    address: '상품거래희망주소',
  },
  {
    src: defaultImage,
    category: '카테고리',
    price: '상품 가격',
    title: '상품 타이틀',
    user: '유저 닉네임',
    address: '상품거래희망주소',
  },
  {
    src: defaultImage,
    category: '카테고리',
    price: '상품 가격',
    title: '상품 타이틀',
    user: '유저 닉네임',
    address: '상품거래희망주소',
  },
];

function NoDataDefaultProductList() {
  return (
    <ProductLayOut>
      {defaultData.map(
        ({ src, category, price, title, user, address }, index) => (
          <PCardItem style={{ background: '#62a3d2' }}>
            <ImageHolder>
              <Image src={src} alt="기본 이미지" />
            </ImageHolder>
            <RelatedInfo>
              <PCardCategory>{category}</PCardCategory>
              <PCardPrice>{price}</PCardPrice>
              <PCardTitle>{title}</PCardTitle>
              <PCardUser>
                <PUserImage>
                  <ImageHolder br="100%">
                    <Image src={src} />
                  </ImageHolder>
                </PUserImage>
                <PUserInfo>
                  <PUserNickname>{user}</PUserNickname>
                  <PUserAddress>{address}</PUserAddress>
                </PUserInfo>
              </PCardUser>
            </RelatedInfo>
          </PCardItem>
        )
      )}
    </ProductLayOut>
  );
}

export default NoDataDefaultProductList;
