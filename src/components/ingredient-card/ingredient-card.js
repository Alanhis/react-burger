import {
	CurrencyIcon,
	Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import IngredntCardStyle from './ingredient-card.module.css';
import Modal from '../modal/modal';
import React from 'react';
import IngredientDetails from '../ingredient-details/ingredient-details';
import { useDispatch, useSelector } from 'react-redux';
import { CLEAN_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from '../../services/actions/ingredients';
import { useDrag } from 'react-dnd'
import { ingredientType } from '../../utils/types';
export default function IngredientCard(props) {

	const data = useSelector(store => store)
	const dispatch = useDispatch()
	const CountIngredient = data.order.orderDetails.filter(item => item._id === props.data._id).length;
	const [isOpen, setIsOpen] = React.useState(false);
	const usedData = props.data;
	const [{ opacity }, dragRef] = useDrag({
		type: 'ingredient',
		item: { ...usedData },
		collect: monitor => ({
			opacity: monitor.isDragging() ? 0.5 : 1
		})
	})
	const handleOpenModal = () => {
		setIsOpen(true)
		dispatch({ type: SET_SELECTED_INGREDIENT, usedData })
	};

	const handleCloseModal = () => {
		setIsOpen(false)
		dispatch({ type: CLEAN_SELECTED_INGREDIENT })
	};
	return (<>
		<div ref={dragRef} onClick={handleOpenModal} style={{ opacity }} className={`${IngredntCardStyle.foodCard} `} >
			<div className={`${IngredntCardStyle.CounterDiv}`}>
				{CountIngredient > 0 && <Counter count={CountIngredient} extraClass={`${IngredntCardStyle.foodCounter}`} />}
			</div>
			<img src={props.data.image} className={`${IngredntCardStyle.foodImage}`} />
			<div className={`${IngredntCardStyle.foodPrice}`} >
				<p className="text text_type_main-default mr-2" > {props.data.price}  </p>
				<CurrencyIcon type="primary" />
			</div> <p className={`text text_type_main-default ${IngredntCardStyle.foodText}`} > {props.data.name}
			</p>
		</div>
		{isOpen && (<div><Modal title={"Детали ингредиента"} onClose={handleCloseModal} >
			<IngredientDetails data={data.ingredients.selectredIngredient} />
		</Modal>
		</div>)}

	</>
	);
}
IngredientCard.propTypes = {
	data: ingredientType
};