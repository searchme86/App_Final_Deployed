import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  makeCategory,
  getListCategory,
  getOneCategory,
  updateCategory,
  clearCategory,
} from './CategoryApi';

/**
 * createCategory : 카테고리를 생성하는 thunk
 * getSingleCategory :  해당 카테고리를 가져오는 thunk
 * getCategoryList : 모든 카테고리를 가져오는 thunk
 * updateSingleCategory : 해당 카테고리를 업데이트 하는 thunk
 * deleteCategory  :  해당 카테고리를 삭제하는 thunk
 **/

export const createCategory = createAsyncThunk(
  'category/createCategory',
  async ({ category, toast, navigate }, { rejectWithValue }) => {
    try {
      const response = await makeCategory(category);
      toast.success('Category Added Successfully');
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**
 * 가져오려는 카테고리의 id를 전달한다.
 * * */
export const getSingleCategory = createAsyncThunk(
  'category/getSingleCategory',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getOneCategory(id);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**
 * 모든 카테고리를 가져온다.
 * * */
export const getCategoryList = createAsyncThunk(
  'category/getCategory',
  async ({ rejectWithValue }) => {
    try {
      const response = await getListCategory();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**
 * 업데이트 하려는 카테고리의 id를 전달한다.
 */
export const updateSingleCategory = createAsyncThunk(
  'category/updateCategory',
  async ({ ItemId, updatedCategory, navigate, toast }, { rejectWithValue }) => {
    try {
      const response = await updateCategory(ItemId, updatedCategory);
      toast.success('카테고리가 업데이트 됐습니다.');
      navigate('/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

/**
 * 삭제 하려는 카테고리의 id를 전달한다.
 */
export const deleteCategory = createAsyncThunk(
  'category/deleteCategory',
  async ({ id, toast }, { rejectWithValue }) => {
    try {
      const response = await clearCategory(id);
      toast.success('카테고리가 삭제됐습니다.');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
