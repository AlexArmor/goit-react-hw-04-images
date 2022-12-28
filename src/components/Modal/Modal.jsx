import { ModalWindow, ImageModal } from './Modal.styled';
import { Backdrop } from '../Backdrop/Backdrop.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onImageClick('');
    }
  };

  handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      this.props.onImageClick('');
    }
  };

  render() {
    return (
      <Backdrop onClick={this.handleBackdrop}>
        <ModalWindow>
          <ImageModal src={this.props.largeImageURL} alt={this.props.alt} />
        </ModalWindow>
      </Backdrop>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string,
};
