import {
  PForm,
  PButtonArea,
  PButtonList,
  PButtonLi,
} from '../../Assets/Styles/Form.style';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from '../../Store/AuthStore/AuthSlice';
import { updateProduct } from '../../Store/ProductStore/ProductThunks';

import SectionPageWithDes from '../../Components/SectionLayOut/SectionPageWithDes';

import ProcessEditState from '../../Components/PageGroup/Product/ProductEdit/ProcessEditState';

import FormScrollFixed from '../../Components/PageGroup/Product/Shared/Module/FormField/FormScrollFixed';
import FormFlexAlign from '../../Components/PageGroup/Product/Shared/Module/FormField/FormFlexAlign';

import CategoryView from '../../Components/PageGroup/Product/Shared/Module/CateogryField/CategoryView';
import ProductImageVIew from '../../Components/PageGroup/Product/Shared/Module/ImageField/ProductImageVIew';
import ProductInput from '../../Components/PageGroup/Product/Shared/Module/InputField/ProductInput';
import ProductTextArea from '../../Components/PageGroup/Product/Shared/Module/InputField/ProductTextArea';
import ProuctTag from '../../Components/PageGroup/Product/Shared/Module/TagField/ProductTag';
import SelectView from '../../Components/PageGroup/Product/Shared/Module/SelectField/SelectView';
import ProductDealAddress from '../../Components/PageGroup/Product/Shared/Module/AddressField/ProductDealAddress';
import ProductListInput from '../../Components/PageGroup/Product/Shared/Module/InputField/ProductListInput';

import ButtonNormal from '../../Components/PageGroup/Product/Shared/Module/ButtonField/ButtonNormal';
import ButtonSubmit from '../../Components/PageGroup/Product/Shared/Module/ButtonField/ButtonSubmit';

import Notification from '../../Components/Notification/Notification';
import ProductReportModal from './ProductReportModal';
import PostalSearchModal from '../../Components/PostalSearch/PostalSearchModal';

import {
  NotiContent,
  productBrandField,
  productPriceField,
  productTitleField,
  productImageField,
  productTypeField,
  productIntroField,
  productHashField,
  productDegreeField,
  productWishField,
  productAddressField,
  productSizeField,
} from './ProductUpload.section';

function ProductNewEdit() {
  const {
    auth: {
      user: {
        newUser: { imageFile, nickname },
      },
    },
  } = useSelector(AuthSelector);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const { handleSubmit } = useForm();

  const pageInfo = {
    pageTitle: '상품 업데이트',
    pageDes: '상품의 정보를 변경 할 수 있습니다.',
  };

  const {
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
  } = ProcessEditState();

  let userCreation = {
    pdUploaderNickname: nickname,
    pdUploaderImage: imageFile,
    productDescription,
  };

  const ButtonInfo = {
    Attr: canSubmit,
    handler: openPreviewModal,
  };

  const registerForm = () => {
    canSubmit && dispatch(updateProduct({ userCreation, id, navigate }));
  };

  return (
    <SectionPageWithDes sectionData={pageInfo}>
      <>
        <Notification content={NotiContent} />
        <PForm
          display="flex"
          onSubmit={handleSubmit(registerForm)}
          style={{ marginTop: '40px', marginBottom: '20px' }}
        >
          <FormScrollFixed>
            {/* 상품 카테고리 */}
            <CategoryView handleState={createProductSchema} />
            {/* 상품 이미지 */}
            <ProductImageVIew
              handleState={setSchema}
              initialState={schema}
              moduleInfo={productImageField}
              dbSavedValue={currentPdImg}
            />
            {/* 버튼 영역 - 상품 페이지 미리보기, 상품등록하기 */}
            <PButtonArea>
              <PButtonList>
                <PButtonLi>
                  <ButtonNormal ButtonInfo={ButtonInfo} />
                </PButtonLi>
                <PButtonLi>
                  <ButtonSubmit ButtonInfo={ButtonInfo} />
                </PButtonLi>
              </PButtonList>
            </PButtonArea>
          </FormScrollFixed>

          <FormFlexAlign>
            {/* 상품명 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productTitleField}
              dbSavedValue={currentPdTitle}
            />
            {/* 상품 브랜드 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productBrandField}
              dbSavedValue={currentPdBrand}
            />
            {/* 상품 타입 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productTypeField}
              dbSavedValue={currentPdType}
            />
            {/* 상품 가격 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productPriceField}
              dbSavedValue={currentPdPrice}
            />
            {/* 상품소개 */}
            <ProductTextArea
              handleState={createProductSchema}
              moduleInfo={productIntroField}
              dbSavedValue={currentPdDes}
            />
            {/* 상품 해쉬태그 */}
            <ProuctTag
              handleState={createProductSchema}
              moduleInfo={productHashField}
              dbSavedValue={currentPdtags}
            />
            {/* 상품 단계 */}
            <SelectView
              handleState={createProductSchema}
              moduleInfo={productDegreeField}
              initalSelectValue={productDegree}
            />
            {/* 상품희망사항 */}
            <ProductTextArea
              handleState={createProductSchema}
              moduleInfo={productWishField}
              dbSavedValue={currentPdWish}
            />
            {/* 상품거래 희망주소 입력 */}
            <ProductDealAddress
              handleState={createProductSchema}
              moduleInfo={productAddressField}
              postModalData={postModalData}
              dbSavedValue={currentPdWish}
            />
            {/* 입력 선택부분, 사이즈 별 상품가격 */}
            <ProductListInput
              handleState={createProductSchema}
              stateInfo={productSizeData}
              moduleInfo={productSizeField}
            />
          </FormFlexAlign>
        </PForm>

        {/* 상품 미리보기 모달 */}
        {isPreviewModalOpen && (
          <ProductReportModal
            modalTextState={userCreation}
            operationProps={previewModalProps}
          />
        )}

        {/* 카카오 주소 검색 모달 */}
        {isAddressModalOpen && (
          <PostalSearchModal postCode={searchModalState} />
        )}
      </>
    </SectionPageWithDes>
  );
}

export default ProductNewEdit;
