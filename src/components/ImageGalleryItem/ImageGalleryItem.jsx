import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import style from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags, id, largeImageURL }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => {
    setModalIsOpen(prevModalIsOpen => !prevModalIsOpen);
  };

  return (
    <li className={style.ImageGalleryItem}>
      <img
        className={style.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        onClick={toggleModal}
        id={id}
      />
      {modalIsOpen && (
        <Modal
          largeImageURL={largeImageURL}
          tags={tags}
          closeModal={toggleModal}
        />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
