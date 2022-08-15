import React from 'react';

import {
  CategoryItem,
  CategoryTitle,
  FunctionList,
  ListContainer,
  ContentDivider,
  AlignComponents,
  AlignList,
} from '../../../Pages/Category/CategoryView.style.js';

import { ImageHolder, Image } from '../../../Assets/Styles/Image.style';
import { OffScreen, OffScreenSpan } from '../../../Assets/Styles/Common.style';

import { CreateCategoryBtn } from '../../../Assets/Styles/Button.style';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCirclePlus,
  faTrashCan,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

function CategoryHasUser(props) {
  const { data, openCreateModal, openUpdateModal, deleteModalWithId } = props;
  return (
    <AlignComponents>
      <ListContainer>
        {data.map(
          ({
            _id,
            categoryTitle,
            categoryDescription,
            categoryLink,
            imageFile,
            ImageDescription,
          }) => (
            <CategoryItem key={_id}>
              <Link to={`/product/category/${categoryTitle}`}>
                <ImageHolder height="150px">
                  <Image
                    src={imageFile}
                    alt={ImageDescription}
                    radius={'14px'}
                  />
                </ImageHolder>

                <ContentDivider>
                  <OffScreen>{categoryDescription}</OffScreen>
                  <CategoryTitle>{categoryTitle}</CategoryTitle>
                </ContentDivider>
              </Link>
              <ContentDivider>
                <AlignList>
                  <FunctionList>
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                      style={{ fontSize: 30, color: '#146ebe' }}
                      onClick={() => openUpdateModal(_id)}
                    />
                  </FunctionList>
                  <FunctionList>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      style={{ fontSize: 30, color: '#ffd43b' }}
                      onClick={() => deleteModalWithId(_id)}
                    />
                  </FunctionList>
                </AlignList>
              </ContentDivider>
            </CategoryItem>
          )
        )}
      </ListContainer>
      <CreateCategoryBtn onClick={openCreateModal}>
        <OffScreenSpan>카테고리 생성버튼</OffScreenSpan>
        <FontAwesomeIcon icon={faCirclePlus} style={{ fontSize: 50 }} />
      </CreateCategoryBtn>
    </AlignComponents>
  );
}

export default CategoryHasUser;
