import { createPortal } from 'react-dom';
import React from 'react';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from './ModalOverlay';

import ModalStyle from './Modal.module.css';
export default function Modal(props){
    const isItFood= props.isFood;
    
    const [domReady, setDomReady] = React.useState(false)
    const modalRoot = document.getElementById("react-modals");
    console.log(modalRoot)
    React.useEffect(()=>{
        setDomReady(true)
    })
    return domReady ? createPortal(
      isItFood===true ? (
        <>
        <div className="Modal">
        <p className="text text_type_main-default">
  Ингредиенты
</p>
        </div>
      </>  
      ):(<>
      <ModalOverlay onClick={props.onClose} />
      <div className= {`${ModalStyle.modal}`}> 
      <div className={`mt-15 mr-10`}>
      <p className="text text_type_main-default">
  Заказ
</p>
      <CloseIcon type="primary" onClick={props.onClose} />
      </div>
       
        <div >
        
        </div>
      </div></>),
      modalRoot
    ): null;
  }
