import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  DeleteModalCategory,
  DeleteModalTitle,
  DeleteModalPrice,
  DeleteModalText,
  DeleteModalContent,
  DeleteModalItem,
} from './ProductOfUser.style.js';
import { Deletebtn } from '../../Assets/Styles/Button.style';
import { ImageHolder, Image } from '../../Assets/Styles/Image.style';

import { OffScreenSpan } from '../../Assets/Styles/Common.style';

import { useDispatch, useSelector } from 'react-redux';
import { AuthSelector } from '../../Store/AuthStore/AuthSlice';
import { ProductSelector } from '../../Store/ProductStore/ProductSlice';
import { getProductsByUser } from '../../Store/ProductStore/ProductThunks';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Masonry from 'react-masonry-css';
import './ProductOfUser.css';
import { Link } from 'react-router-dom';

import ProductDelete from './ProductDelete';
import LoadingProductOfUser from '../../Components/PageStatus/LoadingProductOfUser';

const Columns = {
  default: 4,
  1100: 2,
  700: 1,
};

function ProductOfUser() {
  const [itemInfo, setItemInfo] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
    auth: {
      user: { newUser },
    },
  } = useSelector(AuthSelector);
  const dispatch = useDispatch();

  const {
    product: { loading, userUploaded },
  } = useSelector(ProductSelector);

  useEffect(() => {
    if (newUser?._id) {
      dispatch(getProductsByUser(newUser?._id));
    }
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleDeleteModal = useCallback((name) => {
    setIsOpen((value) => !value);
    setIsModalOpen(true);
    setItemInfo({ ...name });
  }, []);

  const modalProps = useMemo(() => {
    return {
      handleClose,
      isOpen,
      itemInfo,
    };
  }, [handleClose, isOpen, itemInfo]);

  return (
    <>
      {loading ? (
        <LoadingProductOfUser />
      ) : (
        <>
          {userUploaded && (
            <>
              <Masonry
                breakpointCols={Columns}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {userUploaded &&
                  userUploaded.map(
                    ({ _id, pdCategory, pdImage, pdTitle, pdPrice }) => (
                      <DeleteModalItem key={_id}>
                        <DeleteModalCategory>#{pdCategory}</DeleteModalCategory>

                        <Link to={`/product/${_id}`}>
                          <ImageHolder br="15px" height="250px">
                            <Image src={pdImage} alt={`${pdTitle} 이미지`} />
                          </ImageHolder>
                        </Link>

                        <DeleteModalContent>
                          <DeleteModalTitle>{pdTitle}</DeleteModalTitle>

                          <DeleteModalPrice>
                            <DeleteModalText>
                              {Number(pdPrice).toLocaleString('ko-KR')}
                            </DeleteModalText>
                            원
                          </DeleteModalPrice>
                          <Deletebtn
                            onClick={() =>
                              handleDeleteModal({ name: pdTitle, id: _id })
                            }
                          >
                            <OffScreenSpan>상품삭제 버튼</OffScreenSpan>
                            <FontAwesomeIcon
                              icon={faTrash}
                              style={{ fontSize: '28px', color: 'red' }}
                            />
                          </Deletebtn>
                        </DeleteModalContent>
                      </DeleteModalItem>
                    )
                  )}
              </Masonry>

              {isModalOpen && <ProductDelete deleteModal={modalProps} />}
            </>
          )}
        </>
      )}
    </>
  );
}

export default ProductOfUser;
