import {
  ModalContent,
  ModalHeader,
  ModalTitle,
} from '../../Components/Modal/Modal.style';

import { AlignList } from '../../Config/Layout/Layout.style';

import {
  ReportContent,
  ReportDOpinion,
  ReportDTitle,
  ReportHeader,
  ReportImage,
  ReportInfo,
  ReportInfoItem,
  ReportInfoLi,
  ReportInfoList,
  ReportIntro,
  ReportMain,
  ReportMore,
  ReportOverflow,
  ReportOverflowLi,
  ReportOverflowList,
  ReportTitle,
  ReportUser,
  RTable,
  RTableTd,
  RTableTh,
  RTableWrapper,
  ReportHashTag,
  ReportUserImage,
} from './ProductReportModal.style';

import { Image, ImageHolder } from '../../Assets/Styles/Image.style';
import { OffScreenSpan } from '../../Assets/Styles/Common.style';

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

import ModalFrame from '../../Components/Modal/ModalFrame';
import defaultImg from '../../Assets/Images/default-product-upload.png';

function ProductReportModal({ modalTextState, operationProps }) {
  const {
    pdUploaderNickname,
    pdUploaderImage,
    productDescription: {
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
      pdSizeInfo,
      addressValue,
      addressModified,
    },
  } = modalTextState;
  const { closePreviewModal, isPreviewModalOpen } = operationProps;

  const refinedPrice = `${Number(pdPrice).toLocaleString('ko-KR')} 원 `;

  const firstSection = [pdCategory, pdBrand, pdType];
  const middleSection = [
    { title: '상품명', value: pdTitle },
    { title: '상품가격', value: refinedPrice },
    { title: '상품단계', value: pdDegree },
  ];

  return (
    <div>
      <ModalFrame
        handleClose={closePreviewModal}
        isOpen={isPreviewModalOpen}
        domId="product-report-modal"
      >
        <>
          <ModalHeader>
            <ModalTitle>등록상품 미리보기</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <ReportContent>
              <ReportHeader>
                <ReportIntro>
                  <ReportUserImage>
                    <ImageHolder
                      br="100%"
                      style={{ width: '65px', height: '65px' }}
                    >
                      <Image src={pdUploaderImage} alt={pdUploaderNickname} />
                    </ImageHolder>
                  </ReportUserImage>
                  <ReportUser>{pdUploaderNickname}</ReportUser>
                  님이 등록하시는 상품 요약입니다.
                </ReportIntro>
                {pdCategory && pdBrand && pdType && (
                  <>
                    <Breadcrumb as="div" mt="15px" mb="10px">
                      {firstSection.map((item) => (
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            href="#"
                            fontWeight="bold"
                            fontSize="18px"
                          >
                            {item}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                      ))}
                    </Breadcrumb>
                  </>
                )}
              </ReportHeader>
              <ReportMain>
                <ReportImage>
                  <ImageHolder>
                    <Image
                      src={pdImage ? pdImage : defaultImg}
                      alt={`${pdTitle} 이미지`}
                    />
                  </ImageHolder>
                </ReportImage>
                <ReportInfo>
                  <ReportInfoList>
                    <ReportInfoLi>
                      <AlignList>
                        {middleSection.map(({ title, value }, index) => (
                          <ReportInfoItem key={index}>
                            <ReportTitle>{title}</ReportTitle>
                            <ReportDTitle>{value}</ReportDTitle>
                          </ReportInfoItem>
                        ))}
                      </AlignList>
                    </ReportInfoLi>
                    <ReportInfoLi>
                      <ReportTitle>상품소개</ReportTitle>
                      <ReportDOpinion>{pdDes}</ReportDOpinion>
                    </ReportInfoLi>
                  </ReportInfoList>
                </ReportInfo>
              </ReportMain>

              {/* 상품상태 설명 , 희망사항 */}
              <ReportMore>
                <AlignList>
                  {/* 상품거래 희망주소 */}
                  <ReportInfoLi>
                    <ReportTitle>상품거래 희망주소</ReportTitle>
                    <ReportDOpinion>
                      {addressValue || addressModified}
                    </ReportDOpinion>
                  </ReportInfoLi>
                  {/* 희망사항 */}
                  <ReportInfoLi>
                    <ReportTitle>상품상태 해쉬태그</ReportTitle>
                    <ReportOverflow>
                      <ReportOverflowList>
                        {pdtags.map((tag, index) => (
                          <ReportOverflowLi key={index}>
                            <ReportHashTag>#{tag}</ReportHashTag>
                          </ReportOverflowLi>
                        ))}
                      </ReportOverflowList>
                    </ReportOverflow>
                  </ReportInfoLi>
                </AlignList>
              </ReportMore>

              {/* 상품상태 설명 , 희망사항 */}
              <ReportMore>
                <AlignList>
                  {/* 희망사항 */}
                  <ReportInfoLi>
                    <ReportTitle>희망사항</ReportTitle>
                    <ReportOverflow>
                      <ReportDOpinion>{pdWish}</ReportDOpinion>
                    </ReportOverflow>
                  </ReportInfoLi>
                </AlignList>
              </ReportMore>
              {/* 사이즈별 가격, 색상별 가격 */}
              <ReportMore>
                <AlignList>
                  <ReportInfoLi>
                    {pdSizeInfo && (
                      <>
                        <ReportTitle>사이즈 별 가격</ReportTitle>
                        <RTableWrapper>
                          <RTable>
                            <caption>
                              <OffScreenSpan>
                                사이즈 별 가격 테이블
                              </OffScreenSpan>
                            </caption>
                            <colgroup>
                              <col
                                style={{
                                  width: '50%',
                                }}
                              />
                              <col style={{ width: '50%' }} />
                            </colgroup>
                            <thead>
                              <tr>
                                <RTableTh scope="col">상품 사이즈</RTableTh>
                                <RTableTh scope="col">가격</RTableTh>
                              </tr>
                            </thead>
                            <tbody>
                              {pdSizeInfo &&
                                pdSizeInfo.map(
                                  ({ pdSize, pdPriceBySize }, index) => (
                                    <tr key={index}>
                                      <RTableTh scope="row">{pdSize}</RTableTh>
                                      <RTableTd>
                                        {`${Number(
                                          pdPriceBySize
                                        ).toLocaleString('ko-KR')} 원`}
                                      </RTableTd>
                                    </tr>
                                  )
                                )}
                            </tbody>
                          </RTable>
                        </RTableWrapper>
                      </>
                    )}
                  </ReportInfoLi>
                </AlignList>
              </ReportMore>
            </ReportContent>
          </ModalContent>
        </>
      </ModalFrame>
    </div>
  );
}

export default ProductReportModal;
