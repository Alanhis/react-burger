import {
	CurrencyIcon,
	Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredntCardStyle from './ingredient-card.module.css';
import Modal from '../modal/modal';
import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
export default function IngredientCard(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	return (<>
		<div onClick={handleOpenModal} className={`${IngredntCardStyle.foodCard} `} >
			<Counter count={1} extraClass={`${IngredntCardStyle.foodCounter}`} />
			<img src={props.data.image} className={`${IngredntCardStyle.foodImage}`} />
			<div className={`${IngredntCardStyle.foodPrice}`} >
				<p className="text text_type_main-default mr-2" > {props.data.price}  </p>
				<CurrencyIcon type="primary" />
			</div> <p className={`text text_type_main-default ${IngredntCardStyle.foodText}`} > {props.data.name}
			</p>
		</div>
		<div > {isOpen && (<><Modal title={"Детали ингредиента"} onClose={handleCloseModal} >
			<IngredientDetails data={props.data} />
		</Modal>
		</>)}
		</div>
	</>
	);
}
IngredientCard.propTypes = {
	data: PropTypes.object,
};