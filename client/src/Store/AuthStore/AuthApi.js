import { API } from '../../Config/Api/Axios';

/**
 * signIn : 로그인 api
 * signUp : 유저 등록 api
 * current : 유저 정보(비밀번호, 프로필 이미지) 확인 api
 * setNewInfo : 유저 정보(비밀번호, 프로필 이미지) 변경 api
 */

export const signIn = (formData) => API.post('/api/users/signin', formData);

export const signUp = (formData) => API.post('/api/users/signup', formData);

export const current = (nickname, formData) =>
  API.post(`/api/users/profile/${nickname}`, formData);

export const setNewInfo = (nickname, formData) =>
  API.patch(`/api/users/profile/${nickname}/password`, formData);
