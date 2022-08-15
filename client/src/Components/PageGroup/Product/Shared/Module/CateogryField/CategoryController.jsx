import { useEffect, useState } from 'react';
import CategoryState from './CategoryState';

function CategoryController() {
  const categories = CategoryState();

  const [errMsg, setErrorMsg] = useState(false);

  useEffect(() => {
    if (categories?.length === 0) {
      setErrorMsg(true);
    }
  }, [categories]);

  const categoryValue = Object.values(categories).map(
    ({ _id, categoryTitle }) => {
      return { id: _id, PdCategoryValue: categoryTitle };
    }
  );

  const categoryData = {
    categoryValue,
    errMsg,
  };

  return categoryData;
}

export default CategoryController;
