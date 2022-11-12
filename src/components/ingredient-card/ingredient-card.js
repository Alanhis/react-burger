import {
	CurrencyIcon,
	Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredntCardStyle from './ingredient-card.module.css';
import Modal from '../modal/modal';
import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAN_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from '../../services/actions/modal-ingredient';
import { useDrag } from 'react-dnd'
import { ingredientType } from '../../utils/types';
import { NavLink, useLocation } from 'react-router-dom';

export default function IngredientCard(props) {
	let countIngredient = 0;
	const data = useSelector(store => store)
	const dispatch = useDispatch()
	if (data.conductor.orderDetails.filter(item => item._id === props.data._id && item.type === 'bun').length > 0) {
		countIngredient = data.conductor.orderDetails.filter(item => item._id === props.data._id).length + 1;
	} else {
		countIngredient = data.conductor.orderDetails.filter(item => item._id === props.data._id).length;
	}


	const location = useLocation();
	const [isOpen, setIsOpen] = React.useState(false);
	const usedData = props.data;
	const [{ opacity }, dragRef] = useDrag({
		type: 'ingredient',
		item: { ...usedData },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.5 : 1
		})
	})
	// const handleOpenModal = () => {

	// 	dispatch({ type: SET_SELECTED_INGREDIENT, usedData })
	// };

	// const handleCloseModal = () => {

	// 	dispatch({ type: CLEAN_SELECTED_INGREDIENT })
	// };
	return (
		<div ref={dragRef} style={{ opacity }} className={`${IngredntCardStyle.foodCard} `} >
			<div className={`${IngredntCardStyle.CounterDiv}`}>
				{countIngredient > 0 && <Counter count={countIngredient} extraClass={`${IngredntCardStyle.foodCounter}`} />}
			</div>
			<div className={`${IngredntCardStyle.foodImage}`}>
				<NavLink to={{ pathname: `/ingredients/${props.data._id}`, state: { background: location } }} >
					<img src={props.data.image} />
				</NavLink>
			</div>
			<div className={`${IngredntCardStyle.foodPrice}`} >
				<p className="text text_type_main-default mr-2" > {props.data.price}  </p>
				<CurrencyIcon type="primary" />
			</div> <p className={`text text_type_main-default ${IngredntCardStyle.foodText}`} > {props.data.name}
			</p>
		</div>



	);
}
