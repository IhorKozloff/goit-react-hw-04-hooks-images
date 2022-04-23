import React, {useState} from "react";
import {GalleryItem, ImageGalleryItemImage} from 'components/ImageGalleryItem/ImageGalleryItem.styled';
import {ModalWindow} from 'components/Modal/Modal';




export const ImageGalleryItem = ({id, imageMin, imageMax}) => {
    const [modalWindowStatus, setModalWindowStatus] = useState(false);
  
   
    function handleModalWindowStatus () {
        setModalWindowStatus(oldStatusState => !oldStatusState);
    };

    return  (
     
        <GalleryItem className="gallery-item">
            <ImageGalleryItemImage id={id} src={imageMin} alt="content" onClick={handleModalWindowStatus}/>
            {
                modalWindowStatus && 
                <ModalWindow onModalCloseBtn={handleModalWindowStatus} >
                    <img src={imageMax} width="650" height="450" alt="pictures"></img>
                </ModalWindow>
            }
        </GalleryItem>    
        
        
    );
};