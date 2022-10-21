import {
	CurrencyIcon,
	Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredntCardStyle from './ingredient-card.module.css';
import Modal from '../modal/modal';
import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAN_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from '../../services/actions/ingredients';
export default function IngredientCard(props) {
	const data = useSelector(store => store)
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = React.useState(false);
	const usedData = props.data;

	const handleOpenModal = () => {
		setIsOpen(true)
		dispatch({ type: SET_SELECTED_INGREDIENT, usedData })
	};

	const handleCloseModal = () => {
		setIsOpen(false)
		dispatch({ type: CLEAN_SELECTED_INGREDIENT })
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
			<IngredientDetails data={data.ingredients.selectredIngredient} />
		</Modal>
		</>)}
		</div>
	</>
	);
}
IngredientCard.propTypes = {
	data: PropTypes.object,
};