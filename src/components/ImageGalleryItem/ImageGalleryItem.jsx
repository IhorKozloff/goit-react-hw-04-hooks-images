import React  from "react";
import {GalleryItem, ImageGalleryItemImage} from 'components/ImageGalleryItem/ImageGalleryItem.styled';




export const ImageGalleryItem = ({id, imageMin}) => {
   

    return  (
     
        <GalleryItem className="gallery-item">
            <ImageGalleryItemImage id={id} src={imageMin} alt="content" />
        </GalleryItem>    
        
        
    )
}