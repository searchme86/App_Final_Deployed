import React from 'react';

import { ModalContent, ModalHeader, ModalTitle } from '../Modal/Modal.style';

import ModalFrame from '../Modal/ModalFrame';
import DaumAddress from './DaumAddress';

function PostalSearchModal({ postCode }) {
  const { closeAddresswModal, isAddressModalOpen, createProductSchema } =
    postCode;

  return (
    <>
      <ModalFrame
        handleClose={closeAddresswModal}
        isOpen={isAddressModalOpen}
        domId="product-address-modal"
      >
        <>
          <ModalHeader>
            <ModalTitle>주소 검색</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <DaumAddress
              handleClose={closeAddresswModal}
              handleState={createProductSchema}
            />
          </ModalContent>
        </>
      </ModalFrame>
    </>
  );
}

export default PostalSearchModal;
