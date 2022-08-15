import React from 'react';

import {
  PFormUnit,
  PFormDesWrapper,
  PFormDes,
  PFormDesList,
  PFormDesLi,
  PFormLiItem,
} from '../../../../../../Assets/Styles/Form.style.js';

import { PFormButton } from '../../../../../../Assets/Styles/Button.style';

import { FormLabel, Input } from '@chakra-ui/react';

import { v4 as uuidv4 } from 'uuid';

function ProductDealAddress({ postModalData, moduleInfo }) {
  const {
    openAddressModal,
    isAddressModalOpen,
    addressValue,
    addressModified,
  } = postModalData;
  const inputDirectionText = '우편주소 검색의 결과가 보이는 곳입니다.';

  const initialSpot = addressValue || inputDirectionText;
  const userWishLocation = addressModified ?? initialSpot;

  const {
    title,
    info,
    data: { prop, type },
  } = moduleInfo;

  return (
    <PFormUnit>
      <FormLabel htmlFor={prop} fontWeight="bold" color="#FF0000">
        {title}
      </FormLabel>
      <PFormDesWrapper>
        <PFormDesList>
          {info &&
            info.map(({ message }) => (
              <>
                <PFormDesLi key={uuidv4()}>
                  <PFormDes>{message}</PFormDes>
                </PFormDesLi>
              </>
            ))}
        </PFormDesList>
      </PFormDesWrapper>
      <PFormLiItem>
        <Input
          type={type}
          id={prop}
          name={prop}
          value={userWishLocation}
          disabled
          width="400px"
        />
        <PFormButton
          type="button"
          onClick={openAddressModal}
          // checked={isAddressModalOpen}
          style={{ marginTop: '0px', marginLeft: 'auto' }}
        >
          우편주소 검색
        </PFormButton>
      </PFormLiItem>
    </PFormUnit>
  );
}

export default ProductDealAddress;
