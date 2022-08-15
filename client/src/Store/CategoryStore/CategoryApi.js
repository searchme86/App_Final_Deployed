import { API } from '../../Config/Api/Axios';

/**
 * makeCategory : 카테고리 생성 api
 * getListCategory : 생성된 모든 카테고리를 가져오는 api
 * getOneCategory : 해당 id의 카테고리를 가져오는 api
 * clearCategory : 해당 id의 카테고리를 삭제하는 api
 * updateCategory : 해당 id의 카테고리를 업데이트 하는 api
 */

export const makeCategory = (categoryData) =>
  API.post('/api/category/upload', categoryData);

export const getListCategory = () => API.get('/api/category/list');

export const getOneCategory = (id) => API.get(`/api/category/${id}`);

export const clearCategory = (id) => API.delete(`/api/category/${id}`);

export const updateCategory = (id, updateCategory) =>
  API.patch(`/api/category/${id}`, updateCategory);
