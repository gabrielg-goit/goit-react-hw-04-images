import React, { useEffect } from 'react';
import style from './Modal.module.css';
import PropTypes from 'prop-types';

const Modal = ({ largeImageURL, tags, closeModal }) => {
  useEffect(() => {
    const closeByEsc = e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', closeByEsc);
    return () => {
      window.removeEventListener('keydown', closeByEsc);
    };
  }, [closeModal]);

  const closeByBackdrop = event => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <div className={style.Overlay} onClick={closeByBackdrop}>
      <div className={style.Modal}>
        <img src={largeImageURL} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};

export default Modal;
