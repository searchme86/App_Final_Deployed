import { createSlice, createSelector } from '@reduxjs/toolkit';
import {
  createProduct,
  getSingleProduct,
  productByCategory,
  getlistProducts,
  productsByPage,
  getRelatedProducts,
  getProductsByUser,
  updateProduct,
  deleteProduct,
  searchProduct,
} from './ProductThunks';

/*
 * category : 특정 카테고리에 관련된 상품을 저장
 * product : 해당하는 단일 상품을 저장
 * products: 모든 상품들을 저장
 * userUploaded : 유저가 올린 상품들을 저장
 * relatedProducts : 특정 카테고리에 연관된 상품들을 저장
 * 페이징
 * currentPage: 현재 페이지, 1로 초기화
 * numberOfPages: 페이지 수에 따라서 변경
 * ProductSize : 사이즈 병 상품가격
 * ProductDegree : 상품의 상태(상/중/하)를 선택할 수 있는 데이터
 * ProductStatus : 상품의 상태(상/중/하 이외로 입력할 경우)
 */

const ProductSlice = createSlice({
  name: 'Nproduct',
  initialState: {
    category: [],
    product: {},
    products: [],
    searchResult: [],
    userUploaded: [],
    relatedProducts: [],
    currentPage: 1,
    numberOfPages: null,
    loading: false,
    isFetching: false,
    productDegree: [
      {
        id: 0,
        value: '최상',
      },
      {
        id: 1,
        value: '상',
      },
      {
        id: 2,
        value: '중상',
      },
      {
        id: 3,
        value: '중',
      },
      {
        id: 4,
        value: '중하',
      },
      {
        id: 5,
        value: '중하',
      },
    ],
    productError: '',
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    // 상품 업로드
    [createProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [createProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.products = [action.payload];
    },
    [createProduct.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    // 상품 업데이트
    [updateProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [updateProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.products = [action.payload];
    },
    [updateProduct.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    // 해당 id의 상품을 가져옴
    [getSingleProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.product = action.payload;
    },
    [getSingleProduct.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    //카테고리에 따른 상품 리스트 가져옴
    [productByCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [productByCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.category = action.payload;
    },
    [productByCategory.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    //상품 리스트를 페이징으로 가져옴
    [productsByPage.pending]: (state, action) => {
      state.loading = true;
    },
    [productsByPage.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.products = action.payload.data;
      state.numberOfPages = action.payload.numberOfPages;
      state.currentPage = action.payload.currentPage;
    },
    [productsByPage.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    // 모든 상품 정보를 가져옴
    [getlistProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getlistProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.products = action.payload;
    },
    [getlistProducts.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    // 여기부터 새로시작
    // 키워드 입력해 제시어에 맞는 상품을 가져옴
    [searchProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [searchProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.searchResult = action.payload;
    },
    [searchProduct.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    //여기까지 작업중

    // 연관된 키워드에 따라 상품정보 가져옴
    [getRelatedProducts.pending]: (state, action) => {
      state.loading = true;
    },
    [getRelatedProducts.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.relatedProducts = action.payload;
    },
    [getRelatedProducts.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    // 유저가 올린 상품을 보여줌
    [getProductsByUser.pending]: (state, action) => {
      state.loading = true;
    },
    [getProductsByUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      state.userUploaded = action.payload;
    },
    [getProductsByUser.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },

    //상품 삭제
    [deleteProduct.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteProduct.fulfilled]: (state, action) => {
      state.loading = false;
      state.productError = '';
      const { arg } = action.meta;
      if (arg) {
        state.userUploaded = state.userUploaded.filter(
          (item) => item._id !== arg
        );
        state.products = state.products.filter((item) => item._id !== arg);
      }
    },
    [deleteProduct.rejected]: (state, action) => {
      state.loading = false;
      state.productError = action.payload?.message;
    },
  },
});

export const { setCurrentPage } = ProductSlice.actions;

const ProductState = createSelector(
  (state) => state.product,
  (product) => {
    return { product };
  }
);

export const ProductSelector = (state) => ProductState(state);

export default ProductSlice.reducer;
