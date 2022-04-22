import React, {Component}  from "react";
import {Backdrop, Content, ModalCloseBtn} from 'components/Modal/Modal.styled';

export class ModalWindow extends Component  {

state = {
    modalWindowContent:'', 
}


// setModalWindowStatus = () => {
//     this.setState(({modalWindowStatus}) => {
//      return {modalWindowStatus: !modalWindowStatus}
//     });
//   }
  
    render () {
        return (
            <>
                <Backdrop className="modal-window-back-drop">
                <ModalCloseBtn 
                    type="button" 
                    className="modal-close-btn"
                    onClick={() => {
                        this.props.onClose('')
                    }} 
                    >X
                </ModalCloseBtn>
                    <Content className="modal-window-content">{this.props.children}</Content>
                </Backdrop>
            </>
            
        )
    };
    
}
