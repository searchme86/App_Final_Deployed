import React, { useEffect } from 'react';

import { SectionLayout, SectionUnit } from '../../Config/Layout/Layout.style';
import { OffScreenTitle } from '../../Assets/Styles/Common.style';

import SectionPageWithDes from '../../Components/SectionLayOut/SectionPageWithDes';

import { useSelector, useDispatch } from 'react-redux';
import { CategorySelector } from '../../Store/CategoryStore/CategorySlice';
import { getCategoryList } from '../../Store/CategoryStore/CategoryThunks';

import { toast } from 'react-toastify';

import CategoryView from './CategoryView';

function SectionCategory() {
  const {
    category: { categories },
  } = useSelector(CategorySelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategoryList({ toast }));
  }, []);

  const pageInfo = {
    offTitle: '카테고리별 상품찾기',
  };

  return (
    <SectionUnit>
      <SectionLayout>
        <OffScreenTitle>카테고리별 상품찾기</OffScreenTitle>
        <CategoryView categories={categories} />
      </SectionLayout>
    </SectionUnit>
  );
}

export default SectionCategory;
