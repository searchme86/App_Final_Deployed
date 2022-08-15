export const deleteEmptyElement = (obj) => {
  if (!obj) return;
  const convertArray = Object.values([...obj]);
  let deleteLastItem = convertArray.filter(
    (item, index) => index < convertArray.length - 1
  );
  return deleteLastItem;
};

export const getCurrentProductInfo = (data) => {
  if (!data) return;

  const {
    pdTitle: currentPdTitle,
    pdImage: currentPdImg,
    pdBrand: currentPdBrand,
    pdType: currentPdType,
    pdPrice: currentPdPrice,
    pdWish: currentPdWish,
    pdDes: currentPdDes,
    pdAddress: currentPdAddress,
    pdSizeInfo: currentPdSizeInfo,
    pdtags: currentPdtags,
  } = data;
  return {
    currentPdTitle,
    currentPdImg,
    currentPdBrand,
    currentPdType,
    currentPdPrice,
    currentPdWish,
    currentPdDes,
    currentPdAddress,
    currentPdSizeInfo,
    currentPdtags,
  };
};
