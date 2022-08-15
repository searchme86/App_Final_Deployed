import {
  PFormUnit,
  PFormDesWrapper,
  PFormDes,
  PFormDesList,
  PFormDesLi,
} from '../../../../../../Assets/Styles/Form.style.js';

import {
  ImageHolder,
  Image,
} from '../../../../../../Assets/Styles/Image.style.js';

import { SectionDivier } from '../../../../../../Config/Layout/Layout.style';

import { FormLabel } from '@chakra-ui/react';
import FileBase from 'react-file-base64';
import { v4 as uuidv4 } from 'uuid';

import defaultImg from '../../../../../../Assets/Images/default-product-upload.png';

function ProductImageVIew({
  handleState,
  moduleInfo,
  initialState,
  dbSavedValue,
}) {
  const {
    title,
    info,
    data: { prop },
  } = moduleInfo;

  const pdImage = initialState?.pdImage;
  const srcValue = pdImage || dbSavedValue;

  return (
    <PFormUnit>
      <FormLabel htmlFor={prop} fontWeight="bold" color="#FF0000">
        {title}
      </FormLabel>
      <PFormDesWrapper>
        <PFormDesList>
          {info &&
            info.map(({ message, id }) => (
              <>
                <PFormDesLi key={id}>
                  <PFormDes>{message}</PFormDes>
                </PFormDesLi>
              </>
            ))}
        </PFormDesList>
      </PFormDesWrapper>
      <ImageHolder>
        <Image
          src={srcValue || defaultImg}
          alt="상품 프로필 이미지"
          id={prop}
        />
      </ImageHolder>
      <SectionDivier>
        <FileBase
          type="file"
          multiple={false}
          onDone={({ base64 }) =>
            handleState({ ...initialState, pdImage: base64 })
          }
        />
      </SectionDivier>
    </PFormUnit>
  );
}

export default ProductImageVIew;
