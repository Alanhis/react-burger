import React from 'react';
import ModalStyle from './modal.module.css';

export default function ModalOverlay(props) {
	React.useEffect(() => {
		const escFunction = (event) => {
			if (event.key === 'Escape') {
				props.onClick(); //Do whatever when esc is pressed
			}
		};
		document.addEventListener('keydown', escFunction);
		return () => {
			document.removeEventListener('keydown', escFunction);
		};
	}, []);
	return (
		<div className={`${ModalStyle.Overlay}`} onClick={props.onClick}></div>
	);
}
