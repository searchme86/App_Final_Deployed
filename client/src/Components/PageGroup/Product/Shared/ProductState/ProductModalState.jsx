import { useState, useCallback } from 'react';

function ProductModalState() {
  const [isPreviewModalOpen, setPreviewModalOpen] = useState(false);
  const [isAddressModalOpen, setAddressModalOpen] = useState(false);

  const openPreviewModal = useCallback(() => {
    setPreviewModalOpen(true);
    setAddressModalOpen(false);
  }, []);

  const openAddressModal = useCallback(() => {
    setAddressModalOpen(true);
    setPreviewModalOpen(false);
  }, []);

  const closePreviewModal = useCallback(() => {
    setPreviewModalOpen(false);
  }, []);

  const closeAddresswModal = useCallback(() => {
    setAddressModalOpen(false);
  }, []);

  return {
    isPreviewModalOpen,
    isAddressModalOpen,
    openPreviewModal,
    closePreviewModal,
    openAddressModal,
    closeAddresswModal,
  };
}

export default ProductModalState;
