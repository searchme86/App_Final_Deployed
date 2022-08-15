import React from 'react';

import {
  PFormUnit,
  PFormDesWrapper,
  PFormDes,
  PFormDesList,
  PFormDesLi,
} from '../../../../../../Assets/Styles/Form.style.js';

import { FormLabel } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import TagsView from './TagsView';

function ProductTag({ handleState, moduleInfo, dbSavedValue }) {
  const { title, info, data } = moduleInfo;

  return (
    <PFormUnit>
      <FormLabel fontWeight="bold" color="#FF0000">
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
      <TagsView
        data={data}
        handleValue={handleState}
        dbSavedValue={dbSavedValue}
      />
    </PFormUnit>
  );
}

export default ProductTag;
