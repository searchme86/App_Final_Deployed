import React, { useState, useEffect, useCallback, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { deleteCategory } from '../../Store/CategoryStore/CategoryThunks';

import { toast } from 'react-toastify';

import CategoryModal from './CategoryModal';
import CategoryUpdate from './CategoryUpdate';
import CategoryNoUser from '../../Components/PageGroup/Cateogory/CategoryNoUser';
import CategoryHasUser from '../../Components/PageGroup/Cateogory/CategoryHasUser';

function CategoryView({ categories }) {
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  const { error } = useSelector((state) => state.category);

  const IdToUpdate = useRef(null);

  const [isOpen, setIsOpen] = useState(false);
  const [canCreateModalOpen, setCreateModalOpen] = useState(false);
  const [canUpdateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    error && toast.error(error);
  }, [error]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openCreateModal = useCallback(() => {
    setIsOpen((value) => !value);
    setCreateModalOpen(true);
    setUpdateModalOpen(false);
  }, []);

  const deleteModalWithId = useCallback(
    (id) => {
      dispatch(deleteCategory({ id, toast }));
    },
    [dispatch]
  );

  const openUpdateModal = useCallback((_id) => {
    setIsOpen((value) => !value);
    setCreateModalOpen(false);
    setUpdateModalOpen(true);
    IdToUpdate.current = _id;
  }, []);

  const createModal = {
    handleClose,
    isOpen,
  };

  const updateModal = {
    handleClose,
    isOpen,
    IdToUpdate,
  };

  return (
    <>
      {user && categories ? (
        <>
          <CategoryHasUser
            data={categories}
            openCreateModal={openCreateModal}
            openUpdateModal={openUpdateModal}
            deleteModalWithId={deleteModalWithId}
          />
          {canCreateModalOpen && <CategoryModal createModal={createModal} />}
          {canUpdateModalOpen && <CategoryUpdate updateModal={updateModal} />}
        </>
      ) : (
        <CategoryNoUser data={categories} />
      )}
    </>
  );
}

export default CategoryView;
