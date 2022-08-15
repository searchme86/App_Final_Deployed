import React from 'react';

import {
  PFormDesWrapper,
  PFormDes,
  PFormDesList,
  PFormDesLi,
} from '../../../../../../Assets/Styles/Form.style.js';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';

import CategoryController from './CategoryController';

function CategorySelect({ handleState }) {
  const { categoryValue, errMsg } = CategoryController();

  const {
    register,
    formState: { errors },
  } = useForm();

  const selectCategory = (e) => {
    const { name, value } = e.target;
    handleState(name, value);
  };

  return (
    <FormControl isInvalid={errors} marginBottom="25px">
      <FormLabel htmlFor="pdCategory" fontWeight="bold" color="#FF0000">
        상품 카테고리
      </FormLabel>
      <PFormDesWrapper>
        <PFormDesList>
          <PFormDesLi>
            <PFormDes>*필수 입력사항입니다</PFormDes>
          </PFormDesLi>
          <PFormDesLi>
            <PFormDes>상품의 카테고리를 선택해주세요</PFormDes>
          </PFormDesLi>
        </PFormDesList>
      </PFormDesWrapper>
      <Select
        id="pdCategory"
        name="pdCategory"
        placeholder="상품의 카테고리를 입력해주세요"
        {...register('pdCategory', {
          required: '상품의 카테고리를 선택해 주세요',
          onChange: selectCategory,
        })}
      >
        {categoryValue.map(({ id, PdCategoryValue }) => (
          <option value={PdCategoryValue} key={id}>
            {PdCategoryValue}
          </option>
        ))}
      </Select>
      <FormErrorMessage as="p">
        {errors?.pdCategory && errors?.pdCategory?.message}
      </FormErrorMessage>
      {errMsg && (
        <Alert status="error" mt="10px">
          <AlertIcon />
          <p>
            등록된 카테고리가 없습니다. 카테고리를 등록 후, 상품등록 해주세요
          </p>
        </Alert>
      )}
    </FormControl>
  );
}

export default CategorySelect;
