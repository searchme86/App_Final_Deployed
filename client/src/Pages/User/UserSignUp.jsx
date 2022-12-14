import React, { useState, useCallback, useEffect } from 'react';

import {
  RegisterArea,
  RegisterBox,
  RegisterBackground,
  RegisterInfo,
  RegisterInput,
  FormEnclose,
  FormLayout,
  RegisterHeader,
  RegisterIntro,
  RegisterTitle,
  RegisterForm,
  LoginSection,
  LoginTitle,
  LinkLogin,
  RegisterAction,
  RegisterAlert,
  RegisterAlertMsg,
  SiteBrandTitle,
} from './UserSignUp.style';
import { PForm } from '../../Assets/Styles/Form.style.js';
import {
  OffScreenSpan,
  OffScreenTitle,
} from '../../Assets/Styles/Common.style';

import { ImageHolder, Image } from '../../Assets/Styles/Image.style';
import { RegisterButton } from '../../Assets/Styles/Button.style';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';

import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../Store/AuthStore/AuthThunks';

import FileBase from 'react-file-base64';
import { useForm } from 'react-hook-form';

import { useNavigate } from 'react-router-dom';

import { UseDebounce } from '../../Components/UseDebounce';

import defaultImg from '../../Assets/Images/default-product-upload.png';
import BgAnimation from '../../Components/BgAnimation/BgAnimation';
import { AuthSelector } from '../../Store/AuthStore/AuthSlice';

const initialState = {
  nickname: '',
  email: '',
  password: '',
  passwordCheck: '',
  imageFile: '',
};

function UserSignUp() {
  const {
    auth: { error },
  } = useSelector(AuthSelector);

  const [show, setShow] = useState(false);
  const [formValue, setFormValue] = useState(initialState);
  const [errMsg, setErrorMsg] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handelChange = () => {
    setShow((value) => !value);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UseInput = useCallback(
    UseDebounce((value) => setFormValue(value), 500),
    []
  );

  const onInputChange = useCallback(
    (e) => {
      const {
        target: { value, name },
      } = e;
      UseInput({ ...formValue, [name]: value });
    },
    [UseInput, formValue]
  );

  const { nickname, email, password, passwordCheck, imageFile } = formValue;

  const isValueAll = [
    nickname,
    email,
    password,
    passwordCheck,
    imageFile,
  ].every(Boolean);

  // *????????????
  // ???????????? ?????? ?????? ????????? ??????(??????, ????????? ?????? ????????? ???????????? ??????)
  let isPwdhas = [password, passwordCheck].every((item) => item.length > 0);

  // ???????????? ?????? ?????? ?????? ????????????
  let pwdMatch = password === passwordCheck;

  // ??????????????? ?????? ??????, ??????????????? ?????? ????????????
  let isPwd = isPwdhas && pwdMatch;

  // ????????? disabled ?????? ??????,
  // ?????? ?????? ?????? ????????????, isPwd??? false??? ??????
  let disabled = isValueAll && !isPwd;

  // ????????? ?????? submit ??? ??? ???????????? ?????????
  let canSubmit = isValueAll && isPwd;

  useEffect(() => {
    if (error) {
      setErrorMsg(false);
    }
  }, []);

  useEffect(() => {
    if (canSubmit) {
      setErrorMsg(true);
    }
  }, [canSubmit]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const registerForm = () => {
    isValueAll && dispatch(createUser({ formValue, navigate }));
  };

  return (
    <RegisterArea>
      <OffScreenTitle>?????? ????????????</OffScreenTitle>
      <RegisterBackground />
      <RegisterBox>
        <RegisterForm>
          <RegisterHeader>
            <RegisterIntro>
              Welcome to
              <SiteBrandTitle to={'/'}>Agora</SiteBrandTitle>
            </RegisterIntro>
            <RegisterTitle>?????? ????????????</RegisterTitle>
          </RegisterHeader>
          <RegisterInfo>
            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <RegisterInput mb="35px">
                  <FormLabel htmlFor="nickname">
                    <OffScreenSpan>????????? ?????????</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="40px">
                    <Input
                      id="nickname"
                      name="nickname"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      placeholder="???????????? ??????????????????"
                      pl="20px"
                      autoComplete="off"
                      {...register('nickname', {
                        required: '????????? ????????? ?????????????????????.',
                        min: {
                          value: 3,
                          message: '???????????? ?????? 3??? ?????????.',
                        },
                        maxLength: {
                          value: 20,
                          message: '???????????? ?????? 20??? ?????? ?????????????????????.',
                        },
                        pattern: {
                          value: /^[a-zA-Z0-9]*$/,
                          message: '????????? ????????? ?????????????????????.',
                        },
                        onChange: onInputChange,
                      })}
                    />
                    <FormErrorMessage as="p">
                      {errors?.nickname && errors?.nickname?.message}
                    </FormErrorMessage>
                  </FormEnclose>
                </RegisterInput>
                <FormLayout display="flex" align="center" mb="20px">
                  <ImageHolder width="140px" height="150px" mr="20px">
                    <Image
                      src={imageFile ? imageFile : defaultImg}
                      alt="default"
                    />
                  </ImageHolder>
                  <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                      setFormValue({ ...formValue, imageFile: base64 })
                    }
                  />
                </FormLayout>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="email">
                    <OffScreenSpan>?????? ?????????</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="40px">
                    <Input
                      type="text"
                      id="email"
                      name="email"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      placeholder="???????????? ??????????????????"
                      autoComplete="off"
                      pl="20px"
                      {...register('email', {
                        required: '???????????? ??????????????????.',
                        onChange: onInputChange,
                      })}
                    />
                  </FormEnclose>
                  <FormErrorMessage as="p">
                    {errors?.email && errors?.email?.message}
                  </FormErrorMessage>
                </RegisterInput>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="password">
                    <OffScreenSpan>???????????? ??????</OffScreenSpan>
                  </FormLabel>
                  <InputGroup>
                    <FormEnclose width="100%" height="40px">
                      <Input
                        type={show ? 'text' : 'password'}
                        id="password"
                        name="password"
                        width="100%"
                        height="100%"
                        fontSize="18px"
                        placeholder="??????????????? ??????????????????"
                        pl="20px"
                        autoComplete="off"
                        {...register('password', {
                          required: '??????????????? ??????????????????',
                          pattern: {
                            value:
                              /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                            message:
                              '?????? 8???????????? 24?????? ????????? ?????? ???????????? ????????? ?????????????????????. ????????? ????????????(!@#$%)??? ?????????????????????.',
                          },
                          onChange: onInputChange,
                        })}
                      />
                    </FormEnclose>
                    <InputRightElement
                      width="4.5rem"
                      style={{ transform: 'translateY(-50%)', top: '50%' }}
                    >
                      <Button
                        w="10rem"
                        h="1.75rem"
                        mr="5px"
                        size="sm"
                        onClick={handelChange}
                      >
                        {show ? '?????????' : '?????????'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage as="p">
                    {errors?.password && errors?.password?.message}
                  </FormErrorMessage>
                </RegisterInput>

                <RegisterInput mb="20px">
                  <FormLabel htmlFor="passwordCheck">
                    <OffScreenSpan>???????????? ??????</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="40px">
                    <Input
                      type="password"
                      id="passwordCheck"
                      name="passwordCheck"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      placeholder="??????????????? ?????? ??????????????????"
                      autoComplete="off"
                      pl="20px"
                      {...register('passwordCheck', {
                        required: '??????????????? ??????????????????',
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                          message:
                            '?????? 8???????????? 24?????? ????????? ?????? ???????????? ????????? ?????????????????????. ????????? ????????????(!@#$%)??? ?????????????????????.',
                        },
                        onChange: onInputChange,
                      })}
                    />
                  </FormEnclose>
                  <FormErrorMessage as="p">
                    {errors?.passwordCheck && errors?.passwordCheck?.message}
                  </FormErrorMessage>
                </RegisterInput>

                {isPwdhas ? (
                  isPwd ? (
                    <RegisterAlert>
                      <RegisterAlertMsg>
                        ????????? ??????????????? ???????????????.
                      </RegisterAlertMsg>
                    </RegisterAlert>
                  ) : (
                    <RegisterAlert>
                      <RegisterAlertMsg>
                        ????????? ??????????????? ????????????.
                      </RegisterAlertMsg>
                    </RegisterAlert>
                  )
                ) : (
                  ''
                )}

                <RegisterAction>
                  <RegisterButton
                    type="submit"
                    disabled={disabled}
                    canSubmit={canSubmit}
                    background="#303C6C"
                  >
                    {isValueAll && isPwd ? '????????????' : ' ????????????'}
                  </RegisterButton>
                </RegisterAction>

                {error ? (
                  errMsg ? (
                    <Alert status="error" mt="10px">
                      <AlertIcon />
                      {error}
                    </Alert>
                  ) : (
                    ''
                  )
                ) : (
                  ''
                )}
              </FormControl>
            </PForm>
          </RegisterInfo>
          <LoginSection>
            <LinkLogin to={'/login'}>
              <LoginTitle>
                ?????? ????????? ????????????????
                <br /> ?????????
              </LoginTitle>
            </LinkLogin>
          </LoginSection>
        </RegisterForm>
      </RegisterBox>
      <BgAnimation />
    </RegisterArea>
  );
}

export default UserSignUp;
