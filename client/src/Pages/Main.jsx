import React from 'react';
import { OffScreenTitle } from '../Assets/Styles/Common.style';
import SectionCategory from './Category/SectionCategory';
import SectionProduct from './Product/SectionProduct';
import SectionMain from './SectionMain';
import BlogA from '../Components/Blog/BlogA';
import BlogB from '../Components/Blog/BlogB';

function Main() {
  return (
    <>
      <OffScreenTitle>메인 섹션</OffScreenTitle>
      <SectionMain />
      <SectionCategory />
      <SectionProduct />
      <BlogA />
      <BlogB />
    </>
  );
}

export default Main;
