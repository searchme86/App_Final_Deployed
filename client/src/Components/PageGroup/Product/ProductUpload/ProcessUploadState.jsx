import { useState, useCallback } from 'react';
import { useSelector } from 'react-redux';

import { ProductSelector } from '../../../../Store/ProductStore/ProductSlice';
import ProductModalState from '../Shared/ProductState/ProductModalState';

import { UseDebounce } from '../../../UseDebounce';

import { deleteEmptyElement } from '../Shared/ProductState/ProductUtil';

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

function ProcessUploadState() {
  const {
    product: { productDegree },
  } = useSelector(ProductSelector);

  const [schema, setSchema] = useState(draft);
  const [pdSize, setPdSize] = useState([{ pdSize: '', pdPriceBySize: '' }]);

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

  const addressValue = pdAddress?.fullAddress;
  const addressModified = pdAddress?.fullAddress;

  const postModalData = {
    openAddressModal,
    isAddressModalOpen,
    addressValue,
    addressModified,
  };

  const productSizeData = {
    data: pdSize,
    callback: setPdSize,
  };

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

  const refinedObj = deleteEmptyElement(pdSize);

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
    pdSizeInfo: refinedObj,
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

  const canSubmit = pdtags?.length !== 0 && essentialFieldIn;

  return {
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

export default ProcessUploadState;
