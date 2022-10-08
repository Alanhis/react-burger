import { createPortal } from 'react-dom';
import React from 'react';
import {CloseIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import { ModalOverlay } from './ModalOverlay';
import ModalStyle from './Modal.module.css';
export default function Modal(props){
    const isItFood= props.isFood;
    
    const [domReady, setDomReady] = React.useState(false)
    const modalRoot = document.getElementById("react-modals");

    React.useEffect(()=>{
        setDomReady(true)
    })
    return domReady ? createPortal(
      isItFood==='true' ? (
        <>
      <ModalOverlay onClick={props.onClose} />
      <div className= {`${ModalStyle.modal}`}> 
      <div  className={`${ModalStyle.ModalTitle} mt-10 ml-10 mr-10`}>
      <p className="text text_type_main-medium ">
 Детали ингредиента
</p>
      <CloseIcon type="primary" onClick={props.onClose} />
      </div>
       
        {props.children}
      </div></>
      ):(<>
      <ModalOverlay onClick={props.onClose} />
      <div className= {`${ModalStyle.modal}`}> 
      <div className={`${ModalStyle.ModalTitle} mt-15 mr-10`}>
      <p className="text text_type_main-default">
  
</p>
      <CloseIcon type="primary" onClick={props.onClose} />
      </div>
       
        {props.children}
      </div></>),
      modalRoot
    ): null;
  }
