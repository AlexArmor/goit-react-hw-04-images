import { ImageGalleryItem } from '../ImageGalleryItem';
import { ImageList } from './ImageGallery.styled';
import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            previewURL={webformatURL}
            largeImageURL={largeImageURL}
            onImageClick={onImageClick}
            alt={tags}
          />
        );
      })}
    </ImageList>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
};
