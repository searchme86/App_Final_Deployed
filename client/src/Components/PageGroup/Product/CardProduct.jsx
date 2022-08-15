import React from 'react';

import {
  PCardIspace,
  PCardItem,
  PCardUser,
  PCardCategory,
  PUserAddress,
  PUserImage,
  PUserInfo,
  PCardTitlePriceWrapper,
  PCardPrice,
  PCardTitle,
  PCardTitleLink,
  PUserNickname,
  PCardTags,
  PCardTag,
  PCardTagText,
  PcardIconBox,
  PCardDgree,
  PcardIcon,
  RelatedImage,
  RelatedHref,
  RelatedInfo,
} from './CardProduct.style';

import { Image, ImageHolder } from '../../../Assets/Styles/Image.style';

import { useSelector } from 'react-redux';

import { AuthSelector } from '../../../Store/AuthStore/AuthSlice';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceSmileWink } from '@fortawesome/free-solid-svg-icons';

import defaultImage from '../../../Assets/Images/default-product-upload.png';

function CardProduct(item) {
  const {
    _id,
    pdUploaderNickname,
    pdUploaderImage,
    pdCategory,
    pdImage,
    pdPrice,
    pdTitle,
    pdAddress,
    pdDegree,
    pdtags,
  } = item;

  const {
    auth: { user },
  } = useSelector(AuthSelector);

  return (
    <>
      <PCardItem>
        <RelatedImage>
          <RelatedHref to={`/product/${_id}`}>
            <ImageHolder
              height="150px"
              style={{
                position: 'relative',
                width: 'initial',
                height: 'initial',
                boxSizing: 'border-box',
                padding: '0',
                margin: '0',
              }}
            >
              <PCardIspace />
              <Image
                src={pdImage ?? defaultImage}
                alt={pdTitle ?? '기본 이미지'}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  top: '0',
                }}
              />
            </ImageHolder>
          </RelatedHref>
        </RelatedImage>

        <RelatedInfo>
          {pdCategory ? (
            <PCardCategory>{pdCategory}</PCardCategory>
          ) : (
            <PCardCategory>상품 타이틀</PCardCategory>
          )}

          {pdtags ? (
            <PCardTags>
              {pdtags.map((tags, index) => (
                <PCardTag key={index}>
                  <PCardTagText>#{tags}</PCardTagText>
                </PCardTag>
              ))}
            </PCardTags>
          ) : (
            ''
          )}

          <PCardTitlePriceWrapper>
            {_id ? (
              <PCardTitle>
                <PCardTitleLink to={`/product/${_id}`}>
                  {pdTitle}
                </PCardTitleLink>
              </PCardTitle>
            ) : (
              <PCardTitle>
                <PCardTitleLink to={`/`}>홈으로 이동</PCardTitleLink>
              </PCardTitle>
            )}

            {pdPrice ? (
              <PCardPrice>
                &#8361;
                {`${Number(pdPrice).toLocaleString('ko-KR')}`}
              </PCardPrice>
            ) : (
              <PCardPrice> 0 원</PCardPrice>
            )}
          </PCardTitlePriceWrapper>

          <PcardIconBox>
            <PCardDgree>{pdDegree}</PCardDgree>
            <PcardIcon>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{
                  fontSize: '20px',
                  color: '#303C6C',
                  marginLeft: '2px',
                }}
              />
            </PcardIcon>
          </PcardIconBox>

          {user?.newUser && (
            <PCardUser>
              <PUserImage>
                <ImageHolder
                  br="100%"
                  style={{ width: '65px', height: '65px' }}
                >
                  <Image src={pdUploaderImage} alt={pdUploaderNickname} />
                </ImageHolder>
              </PUserImage>
              <PUserInfo>
                <PUserNickname>{pdUploaderNickname}</PUserNickname>
                <PUserAddress>{pdAddress}</PUserAddress>
              </PUserInfo>
            </PCardUser>
          )}
        </RelatedInfo>
      </PCardItem>
    </>
  );
}

export default CardProduct;
