import React, { useState, useEffect, useCallback } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  Input,
  Button,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import {
  LoginWrapper,
  LonginContainer,
  LoginBox,
  LoginHeader,
  LoginImage,
  LoginToHome,
  LoginTitle,
  LoginContent,
  LoginBtnArea,
  LoginAlertArea,
  LoginToSignUp,
  LoginToSignUpMsg,
  LoginBgShapehape,
} from './UserLogin.style';
import { OffScreenSpan } from '../../Assets/Styles/Common.style';
import {
  PForm,
  RegisterInput,
  FormEnclose,
} from '../../Assets/Styles/Form.style';
import { LoginBtn } from '../../Assets/Styles/Button.style';

import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from '../../Store/AuthStore/AuthSlice';
import { login } from '../../Store/AuthStore/AuthThunks';

import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouseChimneyWindow } from '@fortawesome/free-solid-svg-icons';
import { useForm } from 'react-hook-form';

import BgAnimation from '../../Components/BgAnimation/BgAnimation';
import { UseDebounce } from '../../Components/UseDebounce';

const initialState = {
  email: '',
  password: '',
};

function UserLogin() {
  const {
    auth: { error },
  } = useSelector(AuthSelector);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formValue, setFormValue] = useState(initialState);
  const [show, setShow] = useState(false);
  const [errMsg, setErrorMsg] = useState(false);

  const { email, password } = formValue;
  const canSubmit = email && password;

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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onDelayIn = useCallback(
    UseDebounce((value) => setFormValue(value), 500),
    []
  );

  const onInputChange = useCallback(
    (e) => {
      const {
        target: { name, value },
      } = e;

      onDelayIn({ ...formValue, [name]: value });
    },
    [formValue, onDelayIn]
  );

  const handleClick = () => {
    setShow((value) => !value);
  };

  const registerForm = () => {
    if (email && password) {
      dispatch(login({ formValue, navigate }));
    }
  };

  return (
    <LoginWrapper
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{
        x: window.innerWidth,
        transition: { ease: 'easeIn', duration: 1 },
      }}
    >
      <LonginContainer>
        <LoginBox>
          <LoginHeader>
            <LoginImage>
              <LoginToHome to={'/'}>
                <OffScreenSpan>홈으로 이동</OffScreenSpan>
                <FontAwesomeIcon
                  icon={faHouseChimneyWindow}
                  style={{ fontSize: '30px', color: '#303C6C' }}
                />
              </LoginToHome>
            </LoginImage>
            <LoginTitle>LogIn</LoginTitle>
          </LoginHeader>
          <LoginContent>
            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <RegisterInput mb="20px">
                  <FormLabel htmlFor="email" mb="0px">
                    <OffScreenSpan>이메일 입력폼</OffScreenSpan>
                  </FormLabel>
                  <FormEnclose width="100%" height="50px">
                    <Input
                      id="email"
                      name="email"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      autoComplete="off"
                      placeholder="이메일을 입력해주세요"
                      {...register('email', {
                        required: '이메일을 입력해주세요',
                        onChange: onInputChange,
                      })}
                    />
                  </FormEnclose>
                </RegisterInput>
                <RegisterInput mb="30px">
                  <FormLabel htmlFor="password" mb="0px">
                    <OffScreenSpan>비밀번호 입력폼</OffScreenSpan>
                  </FormLabel>
                  <InputGroup width="100%" height="50px">
                    <Input
                      type={show ? 'text' : 'password'}
                      id="password"
                      name="password"
                      width="100%"
                      height="100%"
                      fontSize="18px"
                      autoComplete="off"
                      placeholder="비밀번호를 입력해주세요"
                      {...register('password', {
                        required: '비밀번호를 입력해주세요',
                        onChange: onInputChange,
                      })}
                    />
                    <InputRightElement
                      width="4.5rem"
                      style={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                      }}
                    >
                      <Button h="1.75rem" size="sm" onClick={handleClick}>
                        {show ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </RegisterInput>
                <LoginBtnArea>
                  <LoginBtn
                    type="submit"
                    background="#303c6c"
                    disabled={!errMsg}
                    canSubmit={canSubmit}
                  >
                    Login
                  </LoginBtn>
                </LoginBtnArea>
              </FormControl>
            </PForm>
          </LoginContent>
          <LoginAlertArea>
            <LoginToSignUp to="/register">
              <LoginToSignUpMsg>아직 계정이 없나요? SignUp</LoginToSignUpMsg>
            </LoginToSignUp>
          </LoginAlertArea>

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
        </LoginBox>
        <LoginBgShapehape />
        <BgAnimation />
      </LonginContainer>
    </LoginWrapper>
  );
}

export default UserLogin;
