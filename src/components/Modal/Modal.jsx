import css from './modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';

const Modal = ({ onModalClose, largeImageURL }) => {
  const onOverlayClick = e => {
    if (e.currentTarget === e.target) {
      onModalClose();
    }
  };

  useEffect(() => {
    const onKeyDown = e => {
      if (e.keyCode === 27) {
        onModalClose();
      }
    };
    // const handleKeyDown = e => {
    //   onKeyDown(e);
    // };

    window.addEventListener('keydown', onKeyDown);
    //
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onModalClose]);

  return (
    <div className={css.overlay} onClick={onOverlayClick}>
      <div className={css.modal}>
        <img src={largeImageURL} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.any.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
