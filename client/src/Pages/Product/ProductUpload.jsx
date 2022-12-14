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
    pageTitle: '?????? ????????????',
    pageDes: '????????? ????????? ??????????????? ?????? ??? ??? ????????????.',
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
            {/* ?????? ???????????? */}
            <CategoryView handleState={createProductSchema} />

            {/* ?????? ????????? */}
            <ProductImageVIew
              handleState={setSchema}
              initialState={schema}
              moduleInfo={productImageField}
            />

            {/* ?????? ?????? - ?????? ????????? ????????????, ?????????????????? */}
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
            {/* ????????? */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productTitleField}
            />

            {/* ?????? ????????? */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productBrandField}
            />

            {/* ?????? ?????? */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productTypeField}
            />

            {/* ?????? ?????? */}
            <ProductInput
              handleState={createProductSchema}
              moduleInfo={productPriceField}
            />

            {/* ???????????? */}
            <ProductTextArea
              handleState={createProductSchema}
              moduleInfo={productIntroField}
            />

            {/* ?????? ???????????? */}
            <ProuctTag
              handleState={createProductSchema}
              moduleInfo={productHashField}
            />

            {/* ?????? ?????? */}
            <SelectView
              handleState={createProductSchema}
              moduleInfo={productDegreeField}
              initalSelectValue={productDegree}
            />

            {/* ?????????????????? */}
            <ProductTextArea
              handleState={createProductSchema}
              moduleInfo={productWishField}
            />

            {/* ???????????? ???????????? ?????? */}
            <ProductDealAddress
              handleState={createProductSchema}
              moduleInfo={productAddressField}
              postModalData={postModalData}
            />

            {/* ?????? ????????????, ????????? ??? ???????????? */}
            <ProductListInput
              handleState={createProductSchema}
              stateInfo={productSizeData}
              moduleInfo={productSizeField}
            />
          </FormFlexAlign>
        </PForm>

        {/* ?????? ???????????? ?????? */}
        {isPreviewModalOpen && (
          <ProductReportModal
            modalTextState={userCreation}
            operationProps={previewModalProps}
          />
        )}

        {/* ????????? ?????? ?????? ?????? */}
        {isAddressModalOpen && (
          <PostalSearchModal postCode={searchModalState} />
        )}
      </>
    </SectionPageWithDes>
  );
}

export default ProductUpload;
