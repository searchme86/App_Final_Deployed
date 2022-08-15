import React from 'react';
import {
  PdetailInfoElse,
  PdCalcButton,
  PdCalcButtonContent,
  PdCalcButtonLayout,
  PdCalcLeftButton,
  PdCalcCount,
  PdCalcRightButton,
  PdCalcPrice,
  PdCalcPriceBold,
} from '../../../../Pages/Product/ProductDetail.style';

import { OffScreenSpan } from '../../../../Assets/Styles/Common.style';

import { Input } from '@chakra-ui/react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import SelectBox from '../../../Select/SelectBox';

function ProductDataControl({ userControlData }) {
  const {
    pdSizeItems,
    sizeData,
    orderCount,
    orderTotal,
    setSize,
    increaseNum,
    decreaseNum,
    pdPrice,
  } = userControlData;

  return (
    <>
      <PdetailInfoElse>
        {pdSizeItems ? (
          pdSizeItems.length > 0 ? (
            <SelectBox data={sizeData} handler={setSize} />
          ) : (
            ' '
          )
        ) : (
          ''
        )}
      </PdetailInfoElse>

      <PdCalcButton>
        <PdCalcButtonContent>
          <PdCalcButtonLayout>
            <PdCalcLeftButton type="button" onClick={increaseNum}>
              <OffScreenSpan>수량 증가 버튼</OffScreenSpan>
              <FontAwesomeIcon icon={faPlus} />
            </PdCalcLeftButton>

            <PdCalcCount>
              <Input
                type="number"
                display="block"
                width="100%"
                height="100%"
                value={orderCount}
                borderRadius="0"
                border="0px"
                textAlign="center"
                disabled
              />
            </PdCalcCount>

            <PdCalcRightButton
              type="button"
              onClick={orderCount > 1 ? decreaseNum : () => {}}
            >
              <OffScreenSpan>수량 감소 버튼</OffScreenSpan>
              <FontAwesomeIcon icon={faMinus} />
            </PdCalcRightButton>
          </PdCalcButtonLayout>

          <PdCalcPrice>
            <PdCalcPriceBold>
              {!orderTotal
                ? Number(pdPrice).toLocaleString('ko-KR')
                : Number(pdPrice * orderCount).toLocaleString('ko-KR')}
            </PdCalcPriceBold>{' '}
            원
          </PdCalcPrice>
        </PdCalcButtonContent>
      </PdCalcButton>
    </>
  );
}

export default ProductDataControl;
