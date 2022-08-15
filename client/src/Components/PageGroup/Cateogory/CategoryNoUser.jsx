import React from 'react';
import {
  ListContainer,
  CategoryItem,
  ContentDivider,
  CategoryTitle,
} from '../../../Pages/Category/CategoryView.style.js';
import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';

import { Link } from 'react-router-dom';
import { OffScreen } from '../../../Assets/Styles/Common.style';

function CategoryNoUser({ data }) {
  return (
    <ListContainer>
      {data.map(
        ({
          _id,
          categoryTitle,
          categoryDescription,
          imageFile,
          ImageDescription,
        }) => (
          <CategoryItem key={_id}>
            <Link to={`/product/category/${categoryTitle}`}>
              <ImageHolder height="150px">
                <Image src={imageFile} alt={ImageDescription} radius={'16px'} />
              </ImageHolder>
              <ContentDivider>
                <OffScreen>{categoryDescription}</OffScreen>
                <CategoryTitle>{categoryTitle}</CategoryTitle>
              </ContentDivider>
            </Link>
          </CategoryItem>
        )
      )}
    </ListContainer>
  );
}

export default CategoryNoUser;
