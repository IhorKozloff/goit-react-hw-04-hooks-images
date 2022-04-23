import React from 'react';
import PropTypes from 'prop-types';
import { GallaryList } from 'components/ImageGallery/ImageGallery.styled';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({data}) => {
    return (
        <GallaryList className="imageGallery">
            {data.map(({id, webformatURL, largeImageURL}) => {
                
                return (
                    <ImageGalleryItem key={id} id={id} imageMin={webformatURL} imageMax={largeImageURL}/>
                )
            })}
        </GallaryList>
    );
};


ImageGallery.propTypes = {
    data: PropTypes.array.isRequired,
}