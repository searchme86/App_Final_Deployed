const convertArray = (data) => {
  if (!data) return;
  let newArray = Object.values(data) || [];
  let result = data && newArray;
  return result;
};

const filterObject = (data) => {
  if (!data) return;
  for (let element in data) {
    if (data[element].hasOwnProperty('pdColor')) {
      let colorData = data.map((item) => {
        const { pdColor, pdPriceByColor } = item;
        let data = {
          cntShow: pdColor,
          cntValue: pdPriceByColor,
        };
        return data;
      });
      let dataNeeded = convertArray(colorData);
      return dataNeeded;
    } else if (data[element].hasOwnProperty('pdSize')) {
      let sizeData = data.map((item) => {
        const { pdSize, pdPriceBySize } = item;
        let data = {
          cntShow: pdSize,
          cntValue: pdPriceBySize,
        };
        return data;
      });
      let dataNeeded = convertArray(sizeData);
      return dataNeeded;
    }
  }
};

let pdSizeItems = pdSizeInfo && Object.values(pdSizeInfo);

let sizeData = pdSizeInfo && filterObject(pdSizeInfo);
