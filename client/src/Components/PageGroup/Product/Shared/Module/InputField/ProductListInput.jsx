import React from 'react';

import {
  PFormUnit,
  PFormList,
  PFormBundle,
  PFormLi,
  PFormBlockTitle,
  PFormBlockTitleDes,
  PFormLiItem,
  PFormBlock,
  PFormDesWrapper,
  PFormDes,
  PFormDesList,
  PFormDesLi,
} from '../../../../../../Assets/Styles/Form.style.js';

import { PFormButton } from '../../../../../../Assets/Styles/Button.style.js';

import { FormLabel, Input } from '@chakra-ui/react';
import { v4 as uuidv4 } from 'uuid';

import { UseDebounce } from '../../../../../UseDebounce';

function ProductListInput({ handleState, stateInfo, moduleInfo }) {
  const { data = [], callback, dbSizeData } = stateInfo;
  const {
    title,
    propShape: { propA, propB },
    firstFormValue: { firstFormTitle, firstFormInfo },
    secondFormValue: { secondFormTitle, secondFormInfo },
  } = moduleInfo;

  const listViewData = dbSizeData ?? data;
  const UseInput = UseDebounce((value) => callback(value), 500);

  const addValue = (e, index) => {
    const {
      target: { name, value },
    } = e;
    const list = [...listViewData];
    list[index][name] = value;
    UseInput(list);
    handleState(propA, listViewData);
  };

  const removeField = (index) => {
    const list = [...listViewData];
    list.splice(index, 1);
    UseInput(list);
    handleState(propA, listViewData);
  };

  const addField = () => {
    UseInput([...listViewData, { [propA]: '', [propB]: '' }]);
    handleState(propA, listViewData);
  };

  return (
    <PFormBlock>
      <PFormBlockTitle>
        {title}
        <PFormBlockTitleDes>(*선택입력사항)</PFormBlockTitleDes>
      </PFormBlockTitle>
      <PFormList>
        {listViewData.map(({ pdSize, pdPriceBySize }, index) => (
          <PFormLi key={index}>
            <PFormLiItem>
              <PFormBundle>
                <PFormUnit>
                  <FormLabel htmlFor={propA} mt="10px" fontWeight="bold">
                    {firstFormTitle}
                  </FormLabel>
                  <PFormDesWrapper>
                    <PFormDesList>
                      {firstFormInfo &&
                        firstFormInfo.map(({ message }) => (
                          <>
                            <PFormDesLi key={uuidv4()}>
                              <PFormDes>{message}</PFormDes>
                            </PFormDesLi>
                          </>
                        ))}
                    </PFormDesList>
                  </PFormDesWrapper>
                  <Input
                    type="text"
                    id={propA}
                    name={propA}
                    autoComplete="off"
                    onChange={(e) => addValue(e, index)}
                    placeholder={pdSize}
                  />
                </PFormUnit>
                <PFormUnit>
                  <FormLabel htmlFor={propB} mt="10px" fontWeight="bold">
                    {secondFormTitle}
                  </FormLabel>
                  <PFormDesWrapper>
                    <PFormDesList>
                      {secondFormInfo &&
                        secondFormInfo.map(({ message }) => (
                          <>
                            <PFormDesLi key={uuidv4()}>
                              <PFormDes>{message}</PFormDes>
                            </PFormDesLi>
                          </>
                        ))}
                    </PFormDesList>
                  </PFormDesWrapper>
                  <Input
                    type="number"
                    id={propB}
                    name={propB}
                    autoComplete="off"
                    onChange={(e) => addValue(e, index)}
                    placeholder={pdPriceBySize}
                  />
                </PFormUnit>
              </PFormBundle>
              {listViewData.length - 1 === index && (
                <PFormButton
                  type="button"
                  onClick={addField}
                  className="add-btn"
                >
                  등록
                </PFormButton>
              )}
            </PFormLiItem>
            {listViewData.length !== 1 && (
              <PFormButton
                type="button"
                onClick={() => removeField(index)}
                className="remove-btn"
              >
                Remove
              </PFormButton>
            )}
          </PFormLi>
        ))}
      </PFormList>
    </PFormBlock>
  );
}

export default ProductListInput;
