import { ModalImg } from 'components/Modal/Modal';
import { Img } from './ImageGalleryItem.styled';
import { useState } from 'react';

export const ImageGalleryItem = ({
  apiImage: { webformatURL, largeImageURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div>
      <Img src={webformatURL} alt={tags} onClick={openModal} />
      <ModalImg
        isOpen={isModalOpen}
        isClose={closeModal}
        onRequestClose={closeModal}
        srs={largeImageURL}
        alt={tags}
      />
    </div>
  );
};
