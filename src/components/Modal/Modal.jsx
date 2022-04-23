import React, { useEffect} from "react"
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";
import {Backdrop, Content, ModalCloseBtn} from 'components/Modal/Modal.styled';


const modalWindowRoot = document.querySelector('#modal-window-root');
export const ModalWindow = ({onModalCloseBtn, children}) => {
    
    
    useEffect(() => {


        const handleKeyDown = (event) => {
            if(event.code === 'Escape'){
                onModalCloseBtn();
            };
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    },[onModalCloseBtn])


    return createPortal(
        <>
            <Backdrop className="modal-window-back-drop">
                <ModalCloseBtn type="button" className="modal-close-btn" onClick={onModalCloseBtn}>   
                    X
                </ModalCloseBtn>
                <Content className="modal-window-content">{children}</Content>
            </Backdrop>
            
        </>, modalWindowRoot        
    );
    
    
};


ModalWindow.propTypes = {
    onModalCloseBtn: PropTypes.func.isRequired,
}