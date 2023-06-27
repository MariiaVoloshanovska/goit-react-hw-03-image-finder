import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  largeUrlImage = e => {
    this.props.modalImg(e.target.dataset.large);
  };

  render() {
    return (
      <ul className={styles.ImageGallery} onClick={this.largeUrlImage}>
        {this.props.options.map(({ id, webformatURL, largeImageURL, tags }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            tags={tags}
            onClick={this.props.onClick}
          />
        ))}
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
  modalImg: PropTypes.func.isRequired,
};

