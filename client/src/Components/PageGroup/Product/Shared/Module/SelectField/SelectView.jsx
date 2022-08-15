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
} from '@chakra-ui/react';

import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

function SelectView({ handleState, moduleInfo, initalSelectValue }) {
  const {
    register,
    formState: { errors },
  } = useForm();

  const {
    title,
    info,
    placeholder,
    data: { required, prop },
  } = moduleInfo;

  const onSelect = (e) => {
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
      <Select
        id={prop}
        name={prop}
        placeholder={placeholder}
        {...register(prop, {
          required: { required },
          onChange: onSelect,
        })}
      >
        {initalSelectValue &&
          initalSelectValue.map(({ id, value }) => (
            <option value={value} key={id}>
              {value}
            </option>
          ))}
      </Select>
      <FormErrorMessage as="p">
        {errors?.prop && errors?.prop?.message}
      </FormErrorMessage>
    </FormControl>
  );
}

export default SelectView;
