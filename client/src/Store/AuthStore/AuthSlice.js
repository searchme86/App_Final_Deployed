import { createSlice, createSelector } from '@reduxjs/toolkit';

/**
 * user : 현재 로그인 중의 유저의 상태
 * status: 서버에서 유저 데이터가 변경됐음을 알리는 텍스트를 담는 상태
 * pwdChangable : 기존 비밀번호와 중복여부(같음/다름)을 true/false 받음
 * error: 에러 상태
 * loading: 로딩 상태
 */

import { login, createUser, checkCurrent, changeInfo } from './AuthThunks';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    status: null,
    pwdChangable: '',
    error: '',
    loading: false,
  },
  reducers: {
    // 유저를 등록하는 리듀서
    setUser: (state, action) => {
      state.user = action.payload;
    },

    // 유저 로그아웃 리듀서
    setLogout: (state, action) => {
      localStorage.clear();
      state.user = null;
    },
  },
  extraReducers: {
    // 로그인
    [login.pending]: (state, action) => {
      state.loading = true;
    },
    [login.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.user = action.payload;
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
    },
    [login.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    // 유저 등록
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      localStorage.setItem('profile', JSON.stringify({ ...action.payload }));
      state.user = action.payload;
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    // 비밀번호 중복여부 확인
    [checkCurrent.pending]: (state, action) => {
      state.loading = true;
    },
    [checkCurrent.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.pwdChangable = action.payload;
    },
    [checkCurrent.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    // 유저 정보 변경(비밀번호, 프로필 이미지)
    [changeInfo.pending]: (state, action) => {
      state.loading = true;
      state.status = '';
    },
    [changeInfo.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.user.newUser.imageFile = action.payload?.newProfile;
      state.status = action.payload?.status;
    },
    [changeInfo.rejected]: (state, action) => {
      state.loading = false;
      state.status = '';
      state.error = action.payload?.message;
    },
  },
});

const AuthState = createSelector(
  (state) => state.auth,
  (auth) => {
    return { auth };
  }
);

export const AuthSelector = (state) => AuthState(state);

export const { setUser, setLogout } = authSlice.actions;

export default authSlice.reducer;
