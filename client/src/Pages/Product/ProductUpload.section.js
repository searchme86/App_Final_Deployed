// 상품명 필드
export const productTitleField = {
  title: '상품명',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '상품의 이름을 정해주세요' },
  ],
  placeholder: '예) 핸드폰,제습기,에어콘',
  data: {
    type: 'text',
    prop: 'pdTitle',
    required: '상품명을 입력해주세요',
  },
};

export const productImageField = {
  title: '상품 이미지',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '상품의 이미지를 파일선택 버튼으로 정해주세요' },
  ],
  data: {
    prop: 'PFormImg',
  },
};

// 상품브랜드 필드
export const productBrandField = {
  title: '상품 브랜드',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '* 상품의 브랜드명을 입력해주세요' },
  ],
  placeholder: '예) 애플,삼성,LG,샤오미',
  data: {
    type: 'text',
    prop: 'pdBrand',
    required: '상품의 브랜드명을 입력해주세요',
  },
};

// 상품타입 필드
export const productTypeField = {
  title: '상품 타입',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '* 상품의 타입을 입력해주세요' },
  ],
  placeholder: '예) 컴퓨터, 노트북, 핸드폰, 아이폰',
  data: {
    type: 'text',
    prop: 'pdType',
    required: '상품의 타입을 입력해주세요',
  },
};

// 상품가격 필드
export const productPriceField = {
  title: '상품 가격',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '* 희망하는 상품의 가격을 입력해주세요' },
    { id: 2, message: '* 화폐단위(원)은 제외하고 입력해주세요' },
  ],
  placeholder: '예) 10000원 -> 10000',
  data: {
    type: 'number',
    prop: 'pdPrice',
    required: '상품 가격을 입력해주세요',
  },
};

// 상품 소개 필드
export const productIntroField = {
  title: '상품 소개',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '상품에 대한 소개글을 남겨주세요' },
  ],
  placeholder: '예) 가성비가 좋습니다.',
  data: {
    size: 'sm',
    prop: 'pdDes',
    required: '상품의 소개를 입력해주세요',
  },
};

// 상품 소개 필드
export const productHashField = {
  title: '상품 해쉬 태그',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '#은 제외하고 텍스트만 입력해주세요' },
    { id: 1, message: '상품의 특장점을 태그로 남겨주세요' },
  ],
  data: { prop: 'pdtags', type: 'text', placeholder: '예) #신상 -> 신상' },
};

// 상품품질단계 필드
export const productDegreeField = {
  title: '상품 품질',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '현재 상품의 품질을 선택해주세요' },
  ],
  placeholder: '현재 상품은 어떤 상태인가요?',
  data: {
    prop: 'pdDegree',
    required: '상품의 상태를 선택해 주세요',
  },
};

// 상품 희망사항 필드
export const productWishField = {
  title: '상품 희망사항',
  info: [
    { id: 0, message: '* 필수 입력사항 입니다.' },
    { id: 1, message: '상품에 대해 희망사항을 입력해주세요' },
  ],
  placeholder: '예) 배송은 직접대면 요청합니다.',
  data: {
    prop: 'pdWish',
    required: '배송 관련해 희망사항을 입력해주세요',
  },
};

// 상품 거래희망주소 필드
export const productAddressField = {
  title: '상품거래 희망주소',
  info: [
    { id: 0, message: '상품거래를 희망하는 주소를 입력해주세요' },
    {
      id: 1,
      message:
        '해당폼은 선택하신 주소를 확인하는 용도로 직접 변경이 불가능합니다. 우편번호검색 버튼으로 변경해주세요',
    },
  ],
  data: {
    type: 'text',
    prop: 'pdAddress',
  },
};

// 상품별 사이즈 필드
export const productSizeField = {
  title: ' 사이즈 별 상품 가격',
  propShape: {
    propA: 'pdSize',
    propB: 'pdPriceBySize',
  },
  firstFormValue: {
    firstFormTitle: '상품 사이즈',
    firstFormInfo: [
      {
        id: 0,
        message: '상품의 사이즈 별 가격을 입력할 수 있습니다.',
      },
    ],
  },
  secondFormValue: {
    secondFormTitle: '사이즈 별 상품가격',
    secondFormInfo: [
      { id: 0, message: '해당 사이즈에 따른 가격을 입력해주세요' },
      {
        id: 1,
        message:
          '원 단위은 제외하고 입력해주세요 (예: 10000원에서 → 10000 으로 화폐단위를 삭제하여 입력해주세요)',
      },
    ],
  },
};

// 상품등록 유의사항 텍스트
export const NotiContent = [
  {
    id: '0',
    catA: '(필수입력)상품 카테고리',
    catB: '(필수입력)상품 이미지',
    cntA: '상품이 속한 카테고리',
    cntB: '상품을 표현하는 이미지',
  },
  {
    id: '1',
    catA: '(필수입력)상품명',
    catB: '(필수입력)상품 브랜드',
    cntA: '상품의 이름',
    cntB: '연관된 상품을 보여주는데 사용',
  },
  {
    id: '2',
    catA: '(필수입력)상품 타입',
    catB: '(필수입력)상품 가격',
    cntA: '제품군',
    cntB: '상품의 가격 ',
  },
  {
    id: '3',
    catA: '(필수입력)상품 소개',
    catB: '(필수입력)상품 해쉬태그',
    cntA: '상품에 대한 설명',
    cntB: '상품을 홍보',
  },
  {
    id: '4',
    catA: '(필수입력)상품 품질',
    catB: '(필수입력)상품 상태설명',
    cntA: '상품의 품질의 단계 (최상,중상,중)',
    cntB: '품질에 대한 구체적인 사유 ',
  },
  {
    id: '5',
    catA: '(필수입력)상품 희망사항',
    catB: '(필수입력)상품거래 희망주소',
    cntA: '상품에 대한 구체적인 희망사항',
    cntB: '상품을 거래하려는 주소.',
  },
  {
    id: '6',
    catA: '(선택)사이즈 별 상품가격',
    cntA: '사이즈 별 상품의 가격',
  },
];
