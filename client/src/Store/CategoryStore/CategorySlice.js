import { createSlice, createSelector } from '@reduxjs/toolkit';

import {
  createCategory,
  getSingleCategory,
  getCategoryList,
  updateSingleCategory,
  deleteCategory,
} from './CategoryThunks';

/**
 * category:  하나의 카테고리 정보
 * categories : 저장된 모든 카테고리 정보
 * error: 에러 상태
 * loading: 로딩 상태
 */

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    category: {},
    categories: [],
    error: '',
    loading: false,
  },
  extraReducers: {
    // 카테고리 생성
    [createCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [createCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.categories.push(action.payload);
    },
    [createCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    // 단일 카테고리를 불러옴
    [getSingleCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [getSingleCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.category = action.payload;
    },
    [getSingleCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    //저장된 모든 카테고리를 불러옴
    [getCategoryList.pending]: (state, action) => {
      state.loading = true;
    },
    [getCategoryList.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      state.categories = action.payload;
    },
    [getCategoryList.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    //단일 카테고리를 업데이트 함
    [updateSingleCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [updateSingleCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      const {
        arg: { ItemId },
      } = action.meta;
      if (ItemId) {
        state.categories = state.categories.map((item) =>
          item._id === ItemId ? action.payload : item
        );
      }
    },
    [updateSingleCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },

    //단일 카테고리를 삭제함
    [deleteCategory.pending]: (state, action) => {
      state.loading = true;
    },
    [deleteCategory.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = '';
      const {
        arg: { id },
      } = action.meta;
      if (id) {
        state.categories = state.categories.filter((item) => item._id !== id);
      }
    },
    [deleteCategory.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload?.message;
    },
  },
});

const CategoryState = createSelector(
  (state) => state.category,
  (category) => {
    return { category };
  }
);

export const CategorySelector = (state) => CategoryState(state);

export default categorySlice.reducer;
