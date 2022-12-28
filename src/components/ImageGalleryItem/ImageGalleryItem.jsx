import { Image, Item } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  previewURL,
  largeImageURL,
  onImageClick,
  alt,
}) => {
  return (
    <Item onClick={() => onImageClick(largeImageURL)}>
      <Image src={previewURL} alt={alt} />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  previewURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
};
