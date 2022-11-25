import { createPortal } from 'react-dom';
import React from 'react';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import ModalOverlay from './modal-overlay';
import ModalStyle from './modal.module.css';

export default function Modal(props: {
  onClose: () => void;
  title: string;
  children: React.ReactElement<any, string | React.JSXElementConstructor<any>>;
}) {
  const modalRoot = document.getElementById('react-modals')!;
  return createPortal(
    <>
      <ModalOverlay onClick={props.onClose} />
      <div className={`${ModalStyle.modal}`}>
        <div className={`${ModalStyle.ModalTitle} mt-10 ml-10 mr-10`}>
          <p className="text text_type_main-medium ">{props.title}</p>
          <CloseIcon type="primary" onClick={props.onClose} />
        </div>

        {props.children}
      </div>
    </>,
    modalRoot
  );
}
