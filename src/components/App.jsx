import { useState, useEffect } from 'react';
import { Searchbar } from './Searchbar';
import { getImages } from '../service/api';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Attention } from './App.styled';

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [largeImageURL, setLargeImageURL] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showBtn, setShowBtn] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    getImages(query, page)
      .then(({ hits, totalHits }) => {
        if (hits.length === 0) {
          setIsEmpty(true);
          return;
        }
        setImages(prevState => [...prevState, ...hits]);
        setShowBtn(Math.ceil(totalHits / 12) > page);
      })
      .catch(error => setError(error.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [query, page]);

  const onFormSubmit = query => {
    setQuery(query);
    setImages([]);
    setLargeImageURL('');
    setPage(1);
    setIsLoading(false);
    setShowBtn(false);
    setIsEmpty(false);
    setError(null);
  };

  const handleClick = () => {
    setPage(prevState => prevState + 1);
  };

  const onImageClick = largeImageURL => {
    setLargeImageURL(largeImageURL);
  };

  return (
    <>
      <Searchbar onFormSubmit={onFormSubmit} btnText="Search" />
      {isLoading && <Loader />}
      {error && <Attention>Виникла помилка запиту</Attention>}
      {isEmpty ? (
        <Attention>Нема чого дивитись</Attention>
      ) : (
        <ImageGallery images={images} onImageClick={onImageClick} />
      )}
      {showBtn && <Button onLoadMoreClick={handleClick} />}
      {largeImageURL && (
        <Modal
          onImageClick={onImageClick}
          largeImageURL={largeImageURL}
          alt={images.tags}
        />
      )}
    </>
  );
};
