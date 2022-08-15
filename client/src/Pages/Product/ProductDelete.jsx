import React from 'react';
import {
  ModalAction,
  ModalContent,
  ModalHeader,
  ModalSeconDaryBtn,
  ModalTitle,
  ModalPrimaryBtn,
} from '../../Components/Modal/Modal.style';

import {
  PDeleteTitle,
  PDeleteTitleWeight,
  PDeleteContent,
} from './ProductDelete.style';

import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../Store/ProductStore/ProductThunks';

import ModalFrame from '../../Components/Modal/ModalFrame';

function ProductDelete({ deleteModal }) {
  const {
    handleClose,
    isOpen,
    itemInfo: { name, id },
  } = deleteModal;
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    if (!id) return;
    id && dispatch(deleteProduct(id));
    handleClose();
  };

  return (
    <ModalFrame
      handleClose={handleClose}
      isOpen={isOpen}
      domId="delete-product-modal"
    >
      <>
        <ModalHeader>
          <ModalTitle>상품 삭제하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <PDeleteContent>
            {name ? (
              <PDeleteTitle>
                상품,
                <PDeleteTitleWeight>{name}</PDeleteTitleWeight> 을/를 <br />
                삭제하시겠습니까?
              </PDeleteTitle>
            ) : (
              <PDeleteTitle>
                현재 유저의 상품이 없거나 이미 삭제된 상품입니다.
              </PDeleteTitle>
            )}
          </PDeleteContent>
          <ModalAction>
            <ModalSeconDaryBtn type="button" onClick={handleClose}>
              취소
            </ModalSeconDaryBtn>
            <ModalPrimaryBtn type="button" onClick={() => handleDelete(id)}>
              삭제
            </ModalPrimaryBtn>
          </ModalAction>
        </ModalContent>
      </>
    </ModalFrame>
  );
}

export default ProductDelete;
