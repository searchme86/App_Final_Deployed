import {
  PForm,
  PButtonArea,
  PButtonList,
  PButtonLi,
} from '../../Assets/Styles/Form.style';

import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from '../../Store/AuthStore/AuthSlice';
import { createProduct } from '../../Store/ProductStore/ProductThunks';

import SectionPageWithDes from '../../Components/SectionLayOut/SectionPageWithDes';

import ProcessUploadState from '../../Components/PageGroup/Product/ProductUpload/ProcessUploadState';

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

function ProductUpload() {
  const {
    auth: { user },
  } = useSelector(AuthSelector);

  const nickname = user?.newUser?.nickname;
  const imageFile = user?.newUser?.imageFile;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { handleSubmit } = useForm();

  const pageInfo = {
    pageTitle: '상품 등록하기',
    pageDes: '상품의 정보를 등록하거나 변경 할 수 있습니다.',
  };

  const {
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
  } = ProcessUploadState();

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
    dispatch(createProduct({ userCreation, navigate }));
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
            />

            {/* 상품 브랜드 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productBrandField}
            />

            {/* 상품 타입 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productTypeField}
            />

            {/* 상품 가격 */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productPriceField}
            />

            {/* 상품소개 */}
            <ProductTextArea
              handleState={createProductSchema}
              moduleInfo={productIntroField}
            />

            {/* 상품 해쉬태그 */}
            <ProuctTag
              handleState={createProductSchema}
              moduleInfo={productHashField}
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
            />

            {/* 상품거래 희망주소 입력 */}
            <ProductDealAddress
              handleState={createProductSchema}
              moduleInfo={productAddressField}
              postModalData={postModalData}
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

export default ProductUpload;
