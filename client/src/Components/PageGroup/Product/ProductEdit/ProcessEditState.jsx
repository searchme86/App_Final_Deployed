import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ProductSelector } from '../../../../Store/ProductStore/ProductSlice';

import { getSingleProduct } from '../../../../Store/ProductStore/ProductThunks';

import { useParams } from 'react-router-dom';

import ProductModalState from '../Shared/ProductState/ProductModalState';

import { getCurrentProductInfo } from '../Shared/ProductState/ProductUtil';

import { UseDebounce } from '../../../UseDebounce';

const draft = {
  pdCategory: '',
  pdTitle: '',
  pdImage: '',
  pdBrand: '',
  pdType: '',
  pdPrice: '',
  pdWish: '',
  pdDes: '',
  pdDegree: '',
  pdAddress: '',
  pdtags: [],
};

function ProcessEditState() {
  const {
    product: { product, productDegree },
  } = useSelector(ProductSelector);

  const [schema, setSchema] = useState(draft);
  const [pdSize, setPdSize] = useState([{ pdSize: '', pdPriceBySize: '' }]);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, []);

  const {
    isPreviewModalOpen,
    isAddressModalOpen,
    openPreviewModal,
    closePreviewModal,
    openAddressModal,
    closeAddresswModal,
  } = ProductModalState();

  const { pdAddress } = schema;

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UseInput = useCallback(
    UseDebounce((value) => setSchema(value), 500),
    []
  );

  const createProductSchema = useCallback(
    (name, value) => {
      UseInput({ ...schema, [name]: value });
    },
    [UseInput, schema]
  );

  const productInfo = product && getCurrentProductInfo(product);
  const {
    currentPdTitle,
    currentPdImg,
    currentPdBrand,
    currentPdType,
    currentPdPrice,
    currentPdWish,
    currentPdDes,
    currentPdtags,
    currentPdAddress,
    currentPdSizeInfo,
  } = productInfo;

  const addressValue = currentPdAddress || pdAddress?.fullAddress;
  const addressModified = currentPdAddress && pdAddress?.fullAddress;

  const postModalData = {
    openAddressModal,
    isAddressModalOpen,
    addressValue,
    addressModified,
  };

  const productSizeData = {
    data: pdSize,
    callback: setPdSize,
    dbSizeData: currentPdSizeInfo,
  };

  /**
   * pdSize, pdAddress
   * const{...}= schema, 구조분해할당으로 초깃값을 구하는 중,
   * pdSize(상품 색상별 사이즈 및 가격)
   * => InitialEditState를 실행 중 이미 가져왔고
   * pdAddress(상품거래 희망주소)
   * => const { pdAddress } = schema 을 통해 값을 가져옵니다
   * "이미" 해당 값을 추출한 상태이기 때문, pdSize, pdAddress는 없습니다.
   */

  const {
    pdCategory,
    pdImage,
    pdTitle,
    pdBrand,
    pdType,
    pdPrice,
    pdDes,
    pdWish,
    pdtags,
    pdDegree,
  } = schema;

  const productDescription = {
    pdCategory,
    pdTitle,
    pdImage,
    pdBrand,
    pdType,
    pdPrice,
    pdDes,
    pdWish,
    pdDegree,
    pdtags,
    pdSizeInfo: pdSize,
    addressValue,
    addressModified,
  };

  const previewModalProps = {
    closePreviewModal,
    isPreviewModalOpen,
  };

  const searchModalState = {
    closeAddresswModal,
    isAddressModalOpen,
    createProductSchema,
  };

  const essentialFieldIn = [
    pdCategory,
    pdBrand,
    pdImage,
    pdPrice,
    pdWish,
    pdDes,
  ].every(Boolean);

  const canSubmit = pdtags.length !== 0 && essentialFieldIn;

  return {
    id,
    currentPdTitle,
    currentPdImg,
    currentPdBrand,
    currentPdType,
    currentPdPrice,
    currentPdWish,
    currentPdDes,
    currentPdtags,
    schema,
    setSchema,
    createProductSchema,
    isPreviewModalOpen,
    isAddressModalOpen,
    openPreviewModal,
    postModalData,
    productSizeData,
    previewModalProps,
    productDescription,
    searchModalState,
    productDegree,
    canSubmit,
  };
}

export default ProcessEditState;
