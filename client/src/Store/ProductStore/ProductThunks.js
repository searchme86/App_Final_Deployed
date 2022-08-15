import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  makeProduct,
  getProduct,
  getProductBycategory,
  pullProducts,
  productPaging,
  getRelatedItems,
  userProducts,
  editProduct,
  clearProduct,
  searchItem,
} from './ProductApi';

export const createProduct = createAsyncThunk(
  'product/createProduct',
  async ({ userCreation, navigate }, { rejectWithValue }) => {
    try {
      const response = await makeProduct(userCreation);
      navigate('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getSingleProduct = createAsyncThunk(
  'product/getSingleProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await getProduct(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productByCategory = createAsyncThunk(
  'product/productByCategory',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await getProductBycategory(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getlistProducts = createAsyncThunk(
  'product/getlistProducts',
  async ({ rejectWithValue }) => {
    try {
      const response = await pullProducts();
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const productsByPage = createAsyncThunk(
  'product/productsByPage',
  async (page, { rejectWithValue }) => {
    try {
      const response = await productPaging(page);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getRelatedProducts = createAsyncThunk(
  'product/getRelatedProducts',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await getRelatedItems(arg);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const getProductsByUser = createAsyncThunk(
  'product/getProductsByUser',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await userProducts(userId);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const updateProduct = createAsyncThunk(
  'product/updateProduct',
  async ({ userCreation, id, navigate }, { rejectWithValue }) => {
    try {
      const response = await editProduct(userCreation, id);
      navigate('/');
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  'product/deleteProduct',
  async (id, { rejectWithValue }) => {
    try {
      const response = await clearProduct(id);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);

export const searchProduct = createAsyncThunk(
  'product/searchProduct',
  async (keyword, { rejectWithValue }) => {
    try {
      const response = await searchItem(keyword);
      return response.data;
    } catch (err) {
      return rejectWithValue(err.response.data);
    }
  }
);
