import { API } from '../../Config/Api/Axios';

/**
 * makeProduct : 상품정보를 (새로) 업로드 하는 api(업데이트 기능 포함)
 * pullProducts: 등록된 모든 상품들을 가져오는 api
 * getProduct: 특정 id에 해당하는 상품을 가져오는 api
 * userProducts: 유저가 올린 상품을 가져오는 api
 * getRelatedItems: 특정 카테고리와 매칭되는(연관된) 상품을 가져오는 api
 * getProductBycategory: 카테고리에 맞는 상품을 가져오는 api
 * productPaging: 상품을 가져오되, 페이징을 고려해서 가져오는 api
 * editProduct : 상품 업데이트 api
 * clearProduct: 상품을 삭제하는 api
 * searchItem : 검색바에서 키워드를 입력해 상품을 가져오는 api
 */

export const makeProduct = (uploadProduct) =>
  API.post('/api/product/upload', uploadProduct);

export const pullProducts = () => API.get(`/api/product/list`);

export const getProduct = (id) => API.get(`/api/product/${id}`);

export const userProducts = (userId) => API.get(`/api/product/user/${userId}`);

export const getRelatedItems = (PInfo) =>
  API.post(`/api/product/relatedProducts`, PInfo);

export const getProductBycategory = (id) =>
  API.get(`/api/product/category/${id}`);

export const productPaging = (page) => API.get(`/api/product/?page=${page}`);

export const editProduct = (updated, id) =>
  API.post(`/api/product/edit/${id}`, updated);

export const clearProduct = (id) => API.delete(`/api/product/user/${id}`);

export const searchItem = (keyword) =>
  API.get(`/api/product/search/?keyword=${keyword}`);
