import React, { useState, useEffect } from 'react';

import {
  ModalTitle,
  ModalContent,
  ModalForm,
  ModalHeader,
  ModalItem,
  ModalList,
  ModalHalf,
  ModalDesTitle,
  ModalDesIndication,
  ModalAction,
  ModalPrimaryBtn,
  ModalSeconDaryBtn,
  ResetButton,
} from '../../Components/Modal/Modal.style';

import { AlignComponents } from './CategoryUpdate.style';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import FileBase from 'react-file-base64';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useDispatch, useSelector } from 'react-redux';

import ModalFrame from '../../Components/Modal/ModalFrame';
import {
  getSingleCategory,
  updateSingleCategory,
} from '../../Store/CategoryStore/CategoryThunks';

function CateoryUpdate({ updateModal }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);
  const { category } = useSelector((state) => state.category);

  const PageText = {
    title: '카테고리 타이틀',
    des: '카테고리 설명',
    ImageDes: '카테고리 이미지 설명',
  };
  const { title, des, ImageDes } = PageText;
  const { handleClose, isOpen, IdToUpdate } = updateModal;

  const updateState = {
    newTitle: '',
    newDescription: '',
    newImageDescription: '',
  };

  const [updatedCategory, setupdatedCategory] = useState(updateState);
  const { current: ItemId } = IdToUpdate;

  const { categoryTitle, categoryDescription, ImageDescription } = category;
  const { newTitle, newDescription, newImageDescription } = updatedCategory;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    dispatch(getSingleCategory(ItemId));
  }, [dispatch, ItemId]);

  const canTrigger = [newTitle, newDescription, newImageDescription].every(
    Boolean
  );

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setupdatedCategory({ ...updatedCategory, [name]: value });
  };

  const inputClear = () => {
    setupdatedCategory(updateState);
  };

  const registerForm = () => {
    dispatch(
      updateSingleCategory({
        ItemId,
        updatedCategory,
        navigate,
        toast,
      })
    );
    inputClear();
    handleClose();
  };

  const closeModal = () => {
    inputClear();
    handleClose();
  };

  return (
    <ModalFrame
      handleClose={handleClose}
      isOpen={isOpen}
      domId="update-category-modal"
    >
      {user && category && (
        <>
          <ModalHeader>
            <ModalTitle>카테고리 변경하기</ModalTitle>
          </ModalHeader>
          <ModalContent>
            <ModalForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <ModalList>
                  {/*<------ 카테고리 타이틀 ------>*/}
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newTitle"
                          mb={0}
                          mr={0}
                          fontSize={18}
                        >
                          {title}
                        </FormLabel>
                        <Input
                          id="newTitle"
                          type="text"
                          value={newTitle}
                          name="newTitle"
                          {...register('newTitle', {
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
                          {errors?.newTitle && errors?.newTitle?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${title}`}</ModalDesTitle>
                        <ModalDesIndication>{categoryTitle}</ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>

                  {/*<------ 카테고리 설명 ------>*/}
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newDescription"
                          mb={0}
                          mr={0}
                          fontSize={16}
                        >
                          {des}
                        </FormLabel>
                        <Textarea
                          id="newDescription"
                          value={newDescription}
                          name="newDescription"
                          {...register('newDescription', {
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
                        />
                        <FormErrorMessage as="p">
                          {errors?.newDescription &&
                            errors?.newDescription?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${des}`}</ModalDesTitle>
                        <ModalDesIndication>
                          {categoryDescription}
                        </ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>

                  {/*<------ 카테고리 이미지 ------>*/}
                  <ModalItem>
                    <ModalHalf>
                      <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                          setupdatedCategory({
                            ...updatedCategory,
                            imageFile: base64,
                          })
                        }
                      />
                    </ModalHalf>
                  </ModalItem>

                  {/*<------ 카테고리 이미지 설명 ------>*/}
                  <ModalItem>
                    <AlignComponents>
                      <ModalHalf mr="10">
                        <FormLabel
                          htmlFor="newImageDescription"
                          mb={0}
                          mr={0}
                          fontSize={16}
                        >
                          {ImageDes}
                        </FormLabel>
                        <Textarea
                          id="newImageDescription"
                          value={newImageDescription}
                          name="newImageDescription"
                          {...register('newImageDescription', {
                            required:
                              '카테고리 이미지에 대한 간략한 설명을 남겨주세요',
                            minLength: {
                              value: 10,
                              message: '최소입력 글자는 10글자입니다.',
                            },
                            onChange: onInputChange,
                          })}
                          size="sm"
                          fontSize="xs"
                          isRequired
                        />
                        <FormErrorMessage as="p">
                          {errors?.newImageDescription &&
                            errors?.newImageDescription?.message}
                        </FormErrorMessage>
                      </ModalHalf>
                      <ModalHalf>
                        <ModalDesTitle>{`기존 ${ImageDes}`}</ModalDesTitle>
                        <ModalDesIndication>
                          {ImageDescription}
                        </ModalDesIndication>
                      </ModalHalf>
                    </AlignComponents>
                  </ModalItem>
                </ModalList>

                <ResetButton type="button" role="button" onClick={inputClear}>
                  초기화
                </ResetButton>

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
      )}
    </ModalFrame>
  );
}

export default CateoryUpdate;
