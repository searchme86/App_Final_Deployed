import React, { useState } from 'react';
import {
  ModalAction,
  ModalHeader,
  ModalTitle,
  ModalForm,
  ModalContent,
  ModalList,
  ModalItem,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ResetButton,
} from '../../Components/Modal/Modal.style';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from '@chakra-ui/react';

import { useDispatch } from 'react-redux';
import { createCategory } from '../../Store/CategoryStore/CategoryThunks';

import FileBase from 'react-file-base64';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import ModalFrame from '../../Components/Modal/ModalFrame';
import CategoryTitleInfo from '../../Components/PageGroup/Cateogory/CategoryTitleInfo';

function CategoryModal({ createModal }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const PageText = {
    title: '카테고리 타이틀',
    des: '카테고리 설명',
    ImageFile: '카테고리 이미지',
    ImageDes: '카테고리 이미지 설명',
  };
  const { title, des, ImageDes } = PageText;
  const { handleClose, isOpen } = createModal;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const initialState = {
    categoryTitle: '',
    categoryDescription: '',
    ImageDescription: '',
  };

  const [category, setCategory] = useState(initialState);

  const { categoryTitle, categoryDescription, ImageDescription } = category;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({ ...category, [name]: value });
  };

  const inputClear = () => {
    setCategory(initialState);
  };

  const canTrigger = [
    categoryTitle,
    categoryDescription,
    ImageDescription,
  ].every(Boolean);

  const closeModal = () => {
    inputClear();
    handleClose();
  };

  const registerForm = () => {
    if (categoryTitle && categoryDescription && ImageDescription) {
      dispatch(createCategory({ category, toast, navigate }));
      inputClear();
      handleClose();
    }
  };

  return (
    <ModalFrame
      handleClose={handleClose}
      isOpen={isOpen}
      domId="create-category-modal"
    >
      <>
        <ModalHeader>
          <ModalTitle>카테고리 등록하기</ModalTitle>
        </ModalHeader>
        <ModalContent>
          <ModalForm onSubmit={handleSubmit(registerForm)}>
            <FormControl isInvalid={errors}>
              <ModalList>
                {/*<------ 카테고리 타이틀 ------>*/}
                <ModalItem>
                  <FormLabel
                    htmlFor="categoryTitle"
                    mb={0}
                    mr={0}
                    fontSize={18}
                  >
                    {title}
                  </FormLabel>
                  <Input
                    id="categoryTitle"
                    type="text"
                    value={categoryTitle || ''}
                    name="categoryTitle"
                    {...register('categoryTitle', {
                      required: '카테고리 타이틀 입력을 해주세요',
                      minLength: {
                        value: 2,
                        message: '최소입력 글자는 2글자입니다.',
                      },
                      onChange: onInputChange,
                    })}
                    size="sm"
                    variant="flushed"
                    color="teal"
                    fontSize="xs"
                    _placeholder={{ color: 'inherit' }}
                    autoComplete="off"
                  />
                  <FormErrorMessage as="p">
                    {errors.categoryTitle && errors.categoryTitle.message}
                  </FormErrorMessage>
                </ModalItem>

                {/*<------ 카테고리 설명 ------>*/}
                <ModalItem>
                  <FormLabel
                    htmlFor="categoryDescription"
                    mb={0}
                    mr={0}
                    fontSize={16}
                  >
                    {des}
                  </FormLabel>

                  <Textarea
                    id="categoryDescription"
                    value={categoryDescription}
                    name="categoryDescription"
                    {...register('categoryDescription', {
                      required: '카테고리에 대해 설명해주세요',
                      minLength: {
                        value: 10,
                        message: '최소입력 글자는 10글자입니다.',
                      },
                      onChange: onInputChange,
                    })}
                    size="sm"
                    fontSize="xs"
                    isRequired
                    resize="none"
                  />
                  <FormErrorMessage as="p">
                    {errors.categoryDescription &&
                      errors.categoryDescription.message}
                  </FormErrorMessage>
                </ModalItem>

                {/*<------ 카테고리 이미지 ------>*/}
                <ModalItem>
                  <div className="">
                    <FileBase
                      type="file"
                      multiple={false}
                      onDone={({ base64 }) =>
                        setCategory({ ...category, imageFile: base64 })
                      }
                    />
                  </div>
                </ModalItem>

                {/*<------ 카테고리 이미지 설명 ------>*/}
                <ModalItem>
                  <FormLabel
                    htmlFor="ImageDescription"
                    mb={0}
                    mr={0}
                    fontSize={16}
                  >
                    {ImageDes}
                  </FormLabel>

                  <Textarea
                    id="ImageDescription"
                    value={ImageDescription}
                    {...register('ImageDescription', {
                      required:
                        '카테고리 이미지에 대한 간략한 설명을 남겨주세요',
                      minLength: {
                        value: 5,
                        message: '최소입력 글자는 6글자입니다.',
                      },
                      onChange: onInputChange,
                    })}
                    name="ImageDescription"
                    size="sm"
                    fontSize="xs"
                    resize="none"
                    isRequired
                  />

                  <FormErrorMessage as="p">
                    {errors.ImageDescription && errors.ImageDescription.message}
                  </FormErrorMessage>
                </ModalItem>
              </ModalList>
              <ResetButton
                type="button"
                role="button"
                style={{ alignSelf: 'flex-end' }}
                onClick={inputClear}
              >
                초기화
              </ResetButton>
              <CategoryTitleInfo />
              <ModalAction>
                <ModalSeconDaryBtn
                  type="button"
                  role="button"
                  onClick={closeModal}
                >
                  취소
                </ModalSeconDaryBtn>
                <ModalPrimaryBtn
                  type="submit"
                  disabled={!canTrigger}
                  role="button"
                >
                  등록
                </ModalPrimaryBtn>
              </ModalAction>
            </FormControl>
          </ModalForm>
        </ModalContent>
      </>
    </ModalFrame>
  );
}

export default CategoryModal;
