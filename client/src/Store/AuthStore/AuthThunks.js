import { createAsyncThunk } from '@reduxjs/toolkit';

import { signIn, signUp, current, setNewInfo } from './AuthApi';

/**
 * login: 유저 로그인 thunk
 * createUser: 유저 생성(등록) thunk
 * checkCurrent: 유저의 비밀번호 중복여부 확인 thunk
 * changeInfo: 유저 정보변경 thunk
 * * */

/**
 * formValue : 유저 이메일, 비밀번호를 포함,
 * naviagate : useNaviagate() 값으로, 성공 시, 홈으로 리다이렉팅 시킴
 */
export const login = createAsyncThunk(
  'auth/login',
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await signIn(formValue);
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**
 * formValue :
 * 유저 닉네임, 유저 프로필 이미지, 유저 이메일, 비밀번호가 포함된 값
 * naviagate : useNaviagate() 값으로, 성공 시, 홈으로 리다이렉팅 시킴
 */
export const createUser = createAsyncThunk(
  'auth/register',
  async ({ formValue, navigate }, { rejectWithValue }) => {
    try {
      const response = await signUp(formValue);
      navigate('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/**
 * nickname: 유저의 닉네임
 * password : 유저가 입력하는 비밀번호
 * :유저가 입력하는 비밀번호가 기존의 등록된 비밀번호와 중복되었는지 아닌지를 판별
 * :유저의 닉네임은 값을 찾아오는 기준
 * * */

export const checkCurrent = createAsyncThunk(
  'auth/password',
  async ({ nickname, password }, { rejectWithValue }) => {
    try {
      const response = await current(nickname, password);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

/**
 * checkCurrent thunk에서 비밀번호 중복여부를 판단 후,
 * 유저의 비밀번호와 프로필 이미지를 변경하는 thunk
 *
 * nickname은 값을 찾기 위한 기준,
 * newProfile: 변경하려는 비밀번호, 새로 등록한 프로필 이미지가 포함된 객체 값
 * * */
export const changeInfo = createAsyncThunk(
  'auth/newPassword',
  async ({ nickname, newProfile }, { rejectWithValue }) => {
    try {
      const response = await setNewInfo(nickname, newProfile);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
