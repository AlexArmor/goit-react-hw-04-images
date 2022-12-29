import { ModalWindow, ImageModal } from './Modal.styled';
import { Backdrop } from '../Backdrop/Backdrop.styled';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ onImageClick, largeImageURL, alt }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onImageClick('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onImageClick]);

  // componentDidMount() {
  //   window.addEventListener('keydown', this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', this.handleKeyDown);
  // }

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };

  return (
    <Backdrop onClick={handleBackdrop}>
      <ModalWindow>
        <ImageModal src={largeImageURL} alt={alt} />
      </ModalWindow>
    </Backdrop>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
