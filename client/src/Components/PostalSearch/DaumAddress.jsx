import React from 'react';
import DaumPostcode from 'react-daum-postcode';

function DaumAddress({ handleClose, handleState }) {
  const handlePostCode = (data) => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    const pdAddress = 'pdAddress';
    handleState(pdAddress, { data, fullAddress });
    handleClose();
  };

  const style = {
    width: '100%',
    height: '470px',
    margintop: '28px',
  };

  return <DaumPostcode style={style} onComplete={handlePostCode} />;
}

export default DaumAddress;
