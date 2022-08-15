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
  Input,
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

function ProductInput({ handleState, moduleInfo, dbSavedValue }) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const {
    title,
    info,
    placeholder,
    data: { required, prop, type },
  } = moduleInfo;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    handleState(name, value);
  };

  return (
    <FormControl isInvalid={errors} marginBottom="25px">
      <FormLabel htmlFor={prop} fontWeight="bold" color="#FF0000">
        {title}
      </FormLabel>
      <PFormDesWrapper>
        <PFormDesList>
          {info &&
            info.map(({ message }) => (
              <>
                <PFormDesLi key={uuidv4()}>
                  <PFormDes>{message}</PFormDes>
                </PFormDesLi>
              </>
            ))}
        </PFormDesList>
      </PFormDesWrapper>
      <Input
        type={type}
        id={prop}
        name={prop}
        placeholder={dbSavedValue || placeholder}
        autoComplete="off"
        {...register(prop, {
          required: required,
          onChange: onInputChange,
          maxLength: {
            value: 7,
            message: '최대입력 글자수는 7자리 입니다.',
          },
        })}
      />
      <FormErrorMessage as="p">
        {errors.prop && errors.prop.message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default ProductInput;
