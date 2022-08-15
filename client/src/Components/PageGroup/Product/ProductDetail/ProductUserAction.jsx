import React from 'react';

import { PdCart, PdEdit } from '../../../../Pages/Product/ProductDetail.style';

import { OffScreenSpan } from '../../../../Assets/Styles/Common.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';

function ProductUserAction({ userAction }) {
  const { _id } = userAction;
  return (
    <>
      <PdCart type="button">장바구니 담기</PdCart>
      <PdEdit
        to={`/edit/${_id}`}
        role="button"
        style={{
          position: 'absolute',
          right: '0px',
          bottom: '0px',
        }}
      >
        <OffScreenSpan>상품 업데이트 버튼</OffScreenSpan>
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{
            fontSize: '40px',
            color: '#62a3d2',
          }}
        />
      </PdEdit>
    </>
  );
}

export default ProductUserAction;
