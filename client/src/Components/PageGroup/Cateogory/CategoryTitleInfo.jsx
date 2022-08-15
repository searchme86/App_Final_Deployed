import React from 'react';

import {
  ModalItem,
  ModalInfo,
  ModalInfoList,
  ModalInfoTitle,
  ModalInfoDes,
  ModalInfoBold,
} from '../../Modal/Modal.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function CategoryTitleInfo() {
  return (
    <ModalInfo>
      <ModalInfoTitle>[유의사항]</ModalInfoTitle>
      <ModalInfoList>
        <ModalItem mb="10" display="flex">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: 10, color: '#ffd43b' }}
          />
          <ModalInfoDes>
            "카테고리 타이틀"은
            <ModalInfoBold>카테고리 이름</ModalInfoBold>
            입니다 (예:가전 / 식품 / 의류)
          </ModalInfoDes>
        </ModalItem>
        <ModalItem mb="10" display="flex">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: 10, color: '#ffd43b' }}
          />
          <ModalInfoDes>
            "카테고리 설명"은
            <ModalInfoBold>제품/상품에 대한 상세설명</ModalInfoBold>
            입니다. (예: 전기전자 제품을 확인 할 수 있습니다. )
          </ModalInfoDes>
        </ModalItem>
        <ModalItem mb="10" display="flex">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: 10, color: '#ffd43b' }}
          />
          <ModalInfoDes>
            "카테고리 이미지"는 카테고리를
            <ModalInfoBold>대표하는 이미지</ModalInfoBold>로 메인화면에서
            확인가능합니다.(예 : mobile.jpg)
          </ModalInfoDes>
        </ModalItem>
        <ModalItem mb="10" display="flex">
          <FontAwesomeIcon
            icon={faCheck}
            style={{ fontSize: 10, color: '#ffd43b' }}
          />
          <ModalInfoDes>
            "카테고리 이미지 설명"은 등록한
            <ModalInfoBold>이미지 설명</ModalInfoBold>입니다. (예: 아이폰00
            이미지 )
          </ModalInfoDes>
        </ModalItem>
      </ModalInfoList>
    </ModalInfo>
  );
}

export default CategoryTitleInfo;
