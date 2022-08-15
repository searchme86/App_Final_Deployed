import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../Store/AuthStore/AuthSlice';

import { Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Layout from './Layout/Layout';
import PrivateRoute from '../Components/PrivateRoute';

import Main from '../Pages/Main';

import UserMain from '../Pages/User/UserMain';
import UserSignUp from '../Pages/User/UserSignUp';
import UserLogin from '../Pages/User/UserLogin';
import UserEdit from '../Pages/User/UserEdit';

import ProductUpload from '../Pages/Product/ProductUpload';
import ProductEdit from '../Pages/Product/ProductEdit';
import ProductDetail from '../Pages/Product/ProductDetail';
import ProductList from '../Pages/Product/ProductList';
import CategoryProduct from '../Pages/Category/CategoryProduct';

import NotFound from '../Pages/Supports/NotFound';

function Router() {
  const location = useLocation();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem('profile'));

  useEffect(() => {
    dispatch(setUser(user));
  }, [dispatch, user]);

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/login" element={<UserLogin />} />
        <Route path="/register" element={<UserSignUp />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />

          {/* 유저 라우터 */}
          <Route
            path="/profile/:nickname"
            element={
              <PrivateRoute>
                <UserMain />
              </PrivateRoute>
            }
          >
            <Route
              path=":nickname"
              element={
                <PrivateRoute>
                  <UserEdit />
                </PrivateRoute>
              }
            />
          </Route>

          {/* 상품 라우터 */}
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <ProductUpload />
              </PrivateRoute>
            }
          />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/edit/:id"
            element={
              <PrivateRoute>
                <ProductEdit />
              </PrivateRoute>
            }
          />
          <Route path="/productList" element={<ProductList />} />
          <Route path="/product/category/:id" element={<CategoryProduct />} />

          {/* 그외, Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
