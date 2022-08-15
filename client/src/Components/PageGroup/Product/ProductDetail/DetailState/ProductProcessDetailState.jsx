import { useState } from 'react';

import { useSelector } from 'react-redux';
import { ProductSelector } from '../../../../../Store/ProductStore/ProductSlice';

function ProductProcessDetailState() {
  const {
    product: {
      product: {
        _id,
        pdUploaderImage,
        pdUploaderNickname,
        pdImage,
        pdTitle,
        pdAddress,
        pdCategory,
        pdBrand,
        pdType,
        pdPrice,
        pdStatus,
        pdtags,
        pdDes,
        pdSizeInfo,
      },

      relatedProducts,
    },
  } = useSelector(ProductSelector);

  const [orderCount, setOrderCount] = useState(1);
  const [orderTotal, setOrderTotal] = useState(0);
  const [size, setSize] = useState([]);

  const increaseNum = (e) => {
    e.preventDefault();
    setOrderCount((value) => value + 1);
    setOrderTotal(orderCount * pdPrice);
  };

  const decreaseNum = (e) => {
    e.preventDefault();
    if (orderCount <= 0) return;
    setOrderCount((value) => value - 1);
    setOrderTotal(orderCount * pdPrice);
  };

  /**
   * 객체를 배열로 변환하는 핸들러
   */
  const convertObjToArray = (obj) => {
    if (!obj) return [];
    let newArray = Object.values(obj) || [];
    let result = obj && newArray;
    return result;
  };

  /**
   * transFormObject 핸들러의 역할
   *
   * 객체배열(상품의 사이즈 별 가격)이 있을 경우,
   * [{pdSize:'유저가 입력한 값', pdPriceBySize:'유저가 입력한 값'},{..},{..}]
   *
   * 이것을 다음으로 변환하려고 함.
   * [{cntShow:"유저가 입력한 값(키,pdSize에 해당하는 값)", cntValue:'유저가 입력한 값(키, pdPriceBySize에 해당하는 값)'}]
   *
   * 만들고자 하는 값은 SelectBox.jsx에서
   * map함수를 통해 아래에 props로 사용됨
   *
   * <SelectTitleSubject>{cntShow}</SelectTitleSubject>
    <SelectTitleContent>{cntValue}</SelectTitleContent>
   *
   */

  const transFormObject = (obj) => {
    if (!obj) return [];
    for (let element in obj) {
      if (obj[element].hasOwnProperty('pdSize')) {
        let sizeData = obj.map((item) => {
          const { pdSize, pdPriceBySize } = item;
          let obj = {
            cntShow: pdSize,
            cntValue: pdPriceBySize,
          };
          return obj;
        });
        let dataNeeded = convertObjToArray(sizeData);
        return dataNeeded;
      }
    }
  };

  let relatedItems = relatedProducts && Object.values(relatedProducts);

  let pdSizeItems = pdSizeInfo && Object.values(pdSizeInfo);
  let sizeData = pdSizeInfo && transFormObject(pdSizeInfo);

  const pictureData = {
    pdImage,
    pdTitle,
  };

  const userData = {
    pdUploaderImage,
    pdUploaderNickname,
    pdAddress,
  };

  const userProductInfo = {
    productSummary: [pdCategory, pdBrand, pdType],
    pdStatus,
    pdDes,
    pdtags,
    pdTitle,
    pdPrice,
  };

  const userControlData = {
    pdSizeItems,
    sizeData,
    orderCount,
    orderTotal,
    setSize,
    increaseNum,
    decreaseNum,
    pdPrice,
  };

  const userAction = {
    _id,
  };

  return {
    relatedItems,
    pictureData,
    userData,
    userProductInfo,
    userControlData,
    userAction,
  };
}

export default ProductProcessDetailState;
