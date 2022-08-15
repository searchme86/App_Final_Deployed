import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  PForm,
  PFormUnit,
  PFormDesWrapper,
  PFormDesList,
  PFormDesLi,
  PFormDes,
} from '../../Assets/Styles/Form.style';
import { ImageHolder, Image } from '../../Assets/Styles/Image.style';
import { OffScreenStrong } from '../../Assets/Styles/Common.style';
import {
  Alert,
  AlertIcon,
  FormControl,
  FormLabel,
  FormErrorMessage,
  InputGroup,
  InputRightElement,
  Input,
  Button,
} from '@chakra-ui/react';

import { useSelector, useDispatch } from 'react-redux';
import { AuthSelector } from '../../Store/AuthStore/AuthSlice';
import { checkCurrent, changeInfo } from '../../Store/AuthStore/AuthThunks.js';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import FileBase from 'react-file-base64';

import { UseDebounce } from '../../Components/UseDebounce';
import mainBg from '../../Assets/Images/default_user_page.svg';

function UserEdit() {
  const {
    auth: {
      status,
      user: { newUser },
      error,
      pwdChangable,
    },
  } = useSelector(AuthSelector);
  const dispatch = useDispatch();

  const { nickname } = useParams();

  const initialState = {
    changedPwd: '',
    imageFile: '',
  };
  const { message, changable } = pwdChangable;

  const confirmRef = useRef(null);

  const [newProfile, setNewProfile] = useState(initialState);

  const [current, setCurrent] = useState('');

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const checkMatch = (e) => {
    e.preventDefault();
    current &&
      dispatch(checkCurrent({ nickname, password: { password: current } }));
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const UseInput = useCallback(
    UseDebounce((value) => setNewProfile(value), 500),
    []
  );

  const onInputChange = useCallback(
    (e) => {
      const {
        target: { name, value },
      } = e;
      UseInput({ ...newProfile, [name]: value });
    },
    [UseInput, newProfile]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const savePrevious = useCallback(
    UseDebounce((value) => setCurrent(value), 500),
    []
  );

  const checkDuplicated = useCallback(
    (e) => {
      const {
        target: { value },
      } = e;
      savePrevious(value);
    },
    [savePrevious]
  );

  const showText = () => {
    setVisible((value) => !value);
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const { confirmPassword, imageFile } = newProfile;

  let isDisabled = !confirmPassword && !imageFile;

  const registerForm = () => {
    if (!confirmPassword && !imageFile) return;
    dispatch(changeInfo({ nickname, newProfile }));
  };

  return (
    <>
      <OffScreenStrong>유저 정보 변경</OffScreenStrong>
      <div
        className=""
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          className=""
          style={{
            display: 'flex',
            padding: '50px',
            boxSizing: 'border-box',
            border: '1px solid',
          }}
        >
          <ImageHolder style={{ width: '50%' }}>
            <Image src={mainBg} alt="이미지" />
          </ImageHolder>

          <div
            className=""
            style={{
              width: '50%',
              padding: '54px 50px 54px 50px',
              boxSizing: 'border-box',
            }}
          >
            <strong
              style={{
                display: 'block',
                fontSize: '20px',
                marginBottom: '10px',
                lineHeight: '1',
              }}
            >
              유저 정보 변경
            </strong>

            <ul style={{ marginBottom: '10px' }}>
              <li>*비밀번호 중복확인 후, 변경 가능합니다.</li>
            </ul>

            <PForm onSubmit={handleSubmit(registerForm)}>
              <FormControl isInvalid={errors}>
                <ul>
                  <li>
                    {/* 변경할 비밀번호 영역 */}
                    <PFormUnit style={{ marginBottom: '0px' }}>
                      <FormLabel htmlFor="password">
                        변경 할 비밀번호 확인
                      </FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>
                              이전의 비밀번호와 일치여부를 확인합니다.
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <Input
                        type="text"
                        id="password"
                        name="password"
                        autoComplete="false"
                        {...register('password', {
                          onChange: checkDuplicated,
                        })}
                      />
                      <FormErrorMessage as="p">
                        {errors.password && errors.password.message}
                      </FormErrorMessage>
                      <Button
                        type="button"
                        onClick={checkMatch}
                        style={{
                          margin: '10px 0 10px 0',
                        }}
                      >
                        비밀번호 중복확인
                      </Button>
                    </PFormUnit>
                    <div className="" style={{ margin: '0 0 10px 0' }}>
                      {current ? changable ? <p>{message}</p> : '' : ''}
                      {current ? changable ? '' : <p>{message}</p> : ''}
                    </div>

                    <PFormUnit>
                      <FormLabel htmlFor="confirmPwd">비밀번호 확인</FormLabel>
                      <PFormDesWrapper>
                        <PFormDesList>
                          <PFormDesLi>
                            <PFormDes>
                              변경하려는 비밀번호를 입력해주세요
                            </PFormDes>
                          </PFormDesLi>
                          <PFormDesLi>
                            <PFormDes>
                              비밀번호는 최소 8자에서 24자로 소문자 대문자
                              그리고 숫자 특수문자(!@#$%)를 포함해야합니다.
                            </PFormDes>
                          </PFormDesLi>
                        </PFormDesList>
                      </PFormDesWrapper>
                      <InputGroup size="md" ref={confirmRef}>
                        <Input
                          type={visible ? 'text' : 'password'}
                          id="confirmPwd"
                          name="confirmPassword"
                          pr="4.5rem"
                          placeholder="변경하려는 비밀번호를 입력해주세요"
                          autoComplete="false"
                          disabled={!changable}
                          {...register('confirmPassword', {
                            required:
                              '소문자 대문자 그리고 숫자 특수문자(!@#$%)를 포함한 총 8자에서 24자로 작성해주세요',
                            pattern: {
                              value:
                                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/,
                              message:
                                '최소 8자리에서 24자로 대문자 혹은 소문자의 문자로 시작해야합니다. 숫자와 특수문자(!@#$%)를 포함해야합니다.',
                            },
                            onChange: onInputChange,
                          })}
                        />
                        <InputRightElement width="4.5rem">
                          <Button h="1.75rem" size="sm" onClick={showText}>
                            {visible ? 'Hide' : 'Show'}
                          </Button>
                        </InputRightElement>
                      </InputGroup>

                      <FormErrorMessage as="p">
                        {errors.confirmPassword &&
                          errors.confirmPassword.message}
                      </FormErrorMessage>
                    </PFormUnit>
                  </li>

                  <li style={{ marginTop: '20px' }}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <ImageHolder width="80px" height="80px" br="100%">
                        <Image
                          src={!imageFile ? newUser?.imageFile : imageFile}
                          alt={newUser?.name}
                          style={{ display: 'block', width: '100%' }}
                        />
                      </ImageHolder>
                      <div className="" style={{ marginLeft: '20px' }}>
                        <strong
                          style={{
                            display: 'block',
                            lineHeight: '1',
                            marginBottom: '10px',
                          }}
                        >
                          변경할 이미지를 선택해주세요
                        </strong>
                        <FileBase
                          type="file"
                          multiple={false}
                          onDone={({ base64 }) =>
                            setNewProfile({
                              ...newProfile,
                              imageFile: base64,
                            })
                          }
                        />
                      </div>
                    </div>
                  </li>
                </ul>

                <Button
                  type="submit"
                  mt="30px"
                  mb="20px"
                  border="0"
                  disabled={isDisabled}
                >
                  변경하기
                </Button>

                {status && (
                  <Alert status="warning">
                    <AlertIcon />
                    {status}
                  </Alert>
                )}
              </FormControl>
            </PForm>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserEdit;
