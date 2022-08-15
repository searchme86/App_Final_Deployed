import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { CategorySelector } from '../../../../../../Store/CategoryStore/CategorySlice';
import { getCategoryList } from '../../../../../../Store/CategoryStore/CategoryThunks';

function CategoryState() {
  const dispatch = useDispatch();
  const {
    category: { categories },
  } = useSelector(CategorySelector);

  useEffect(() => {
    dispatch(getCategoryList({}));
  }, []);

  return categories;
}

export default CategoryState;
