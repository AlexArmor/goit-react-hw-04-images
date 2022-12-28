import { Component } from 'react';
import { Searchbar } from './Searchbar';
import { getImages } from '../service/api';
import { ImageGallery } from './ImageGallery';
import { Button } from './Button';
import { Loader } from './Loader';
import { Modal } from './Modal';
import { Attention } from './App.styled';

export class App extends Component {
  state = {
    query: '',
    images: [],
    largeImageURL: '',
    page: 1,
    isLoading: false,
    showBtn: false,
    isEmpty: false,
    error: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.setState({
        isLoading: true,
      });
      getImages(this.state.query, this.state.page)
        .then(({ hits, totalHits }) => {
          if (hits.length === 0) {
            this.setState({
              isEmpty: true,
            });
            return;
          }
          this.setState(prevState => ({
            images: [...prevState.images, ...hits],
            showBtn: Math.ceil(totalHits / 12) > this.state.page,
          }));
        })
        .catch(error =>
          this.setState({
            error: error.message,
          })
        )
        .finally(() => {
          this.setState({
            isLoading: false,
          });
        });
    }
  }

  onFormSubmit = query => {
    this.setState({
      query,
      images: [],
      largeImageURL: '',
      page: 1,
      isLoading: false,
      showBtn: false,
      showModal: false,
      isEmpty: false,
    });
  };

  handleClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onImageClick = largeImageURL => {
    this.setState({
      largeImageURL,
    });
  };

  render() {
    return (
      <>
        <Searchbar onFormSubmit={this.onFormSubmit} btnText="Search" />
        {this.state.isLoading && <Loader />}
        {this.state.isEmpty ? (
          <Attention>Нема чого дивитись</Attention>
        ) : (
          <ImageGallery
            images={this.state.images}
            onImageClick={this.onImageClick}
          />
        )}
        {this.state.showBtn && <Button onLoadMoreClick={this.handleClick} />}
        {this.state.largeImageURL && (
          <Modal
            onImageClick={this.onImageClick}
            largeImageURL={this.state.largeImageURL}
            alt={this.state.images.tags}
          />
        )}
      </>
    );
  }
}
