import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { animateScroll as scroll } from 'react-scroll';

import { GalleryApi } from './GalleryApi';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

import 'react-toastify/dist/ReactToastify.css';
import 'index.css';

export class App extends Component {
  state = {
    inputValue: '',
    gallery: [],
    loading: false,
    page: 1,
    showModal: false,
    modalImg: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.inputValue;
    const nextValue = this.state.inputValue;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevValue !== nextValue || prevPage !== nextPage) {
      this.setState({ loading: true });

      GalleryApi(nextValue, nextPage)
        .then(response => {
          this.setState(prevState => ({
            gallery: [...prevState.gallery, ...response.data.hits],
          }));
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  showImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    scroll.scrollToBottom();
  };

  handleFormSubmit = ({ value }) => {
    const prevState = this.state.inputValue;
    if (prevState === value) {
      return;
    }

    this.setState({
      inputValue: value,
      gallery: [],
      page: 1,
    });
  };

  LargeImg = large => {
    this.setState({
      modalImg: large,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { gallery, loading, showModal, modalImg } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit} />
        {gallery.length > 0 && (
          <ImageGallery
            options={gallery}
            onClick={this.toggleModal}
            modalImg={this.LargeImg}
          />
        )}
        {loading && <Loader />}
        {gallery.length > 0 && !loading && (
          <Button nextPage={this.showImages} />
        )}
        {showModal && (
          <Modal onClick={this.toggleModal}>
            <img style={{ width: 1000 }} src={modalImg} alt="modal" />
          </Modal>
        )}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}