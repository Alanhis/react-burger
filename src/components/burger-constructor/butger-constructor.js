import {
	ConstructorElement,
	CurrencyIcon,
	Button,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstuctorStyle from './butger-constructor.module.css';
import Modal from '../modal/modal';
import React, { useMemo } from 'react';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import { sendOrder } from '../../utils/post-logic';
import { IngredientConstructor } from './ingredient-constuctor';
import { url } from '../app/app'
import { useDispatch, useSelector } from 'react-redux';
import { ADD_COMPONENT } from '../../services/actions/order';
import { useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import BurgerConstuctorList from '../burger-cunstructor-list/burger-constructor-list.js'
export default function BurgerConstuctor() {
	const data = useSelector(store => store);

	const dispatch = useDispatch()
	const [{ isHover }, dropTargetRef] = useDrop({
		accept: 'ingredient',
		collect: monitor => ({
			isHover: monitor.isOver()
		}),
		drop(item) {
			dispatch({
				type: ADD_COMPONENT,
				item: {
					...item,
					dragId: uuidv4()
				}
			})
		}
	})
	const ingredientfimal = IngredientConstructor(data.order.orderDetails)


	return (
		<section ref={dropTargetRef} className={`${BurgerConstuctorStyle.IngredientList}  mb-2  mt-25 `}>
			{ingredientfimal.length ? <BurgerConstuctorList data={ingredientfimal} /> : <p>Нет данных</p>}
		</section>
	);
}
