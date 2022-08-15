import React from 'react';
import { Page, PageContainer } from './Layout.style';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../Components/PageGroup/Header';
import Footer from '../../Components/PageGroup/Footer';

function Layout() {
  return (
    <Page>
      <Header />
      <PageContainer>
        <Outlet />
      </PageContainer>
      <Footer />
      <ToastContainer />
    </Page>
  );
}

export default Layout;
