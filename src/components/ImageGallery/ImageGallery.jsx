import React from "react";
import { GallaryList } from 'components/ImageGallery/ImageGallery.styled';
import {ImageGalleryItem} from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({data, onImageClick}) => {
    
return (
    <GallaryList className="imageGallery" onClick={onImageClick}>
        {data.map(({id, webformatURL}) => {
            return (
                <ImageGalleryItem key={id} id={id} imageMin={webformatURL}/>
            )
        })}
    </GallaryList>
)
}