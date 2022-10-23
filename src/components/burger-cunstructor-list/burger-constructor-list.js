import {
	ConstructorElement,
	CurrencyIcon,
	Button,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstuctorStyle from '../burger-constructor/butger-constructor.module.css';
import Modal from '../modal/modal';
import React, { useMemo, useCallback } from 'react';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import { sendOrder } from '../../utils/post-logic';
import OrderedIngredient from '../ordered-ingredient/ordered-ingredient'
import { url } from '../app/app'
import { useDispatch, useSelector } from 'react-redux';
import { MODAL_OPEN, MODAL_CLOSE, ORDER_NUMBER_REQUEST, UPDATE_CONSTRUCTOR_LIST } from '../../services/actions/order';


export default function BurgerConstuctorList(props) {

	const dispatch = useDispatch()
	const data = useSelector(store => store);
	const moveCard = useCallback((dragIndex, hoverIndex) => {

		const dragCard = props.data[dragIndex];
		const newCards = [...props.data]

		newCards.splice(dragIndex, 1)

		newCards.splice(hoverIndex, 0, dragCard)


		dispatch({
			type: UPDATE_CONSTRUCTOR_LIST,
			item: newCards,
		})
	}, [props.data, dispatch]);


	const handleOpenModal = () => {
		dispatch({ type: MODAL_OPEN })
	};
	const handleCloseModal = () => {
		dispatch({ type: MODAL_CLOSE })
	};

	const finalPrice = useMemo(() => (props.data.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0) + props.data[0].price))
	return (<>
		{props.data[0].type === 'bun' && <div
			className={`${BurgerConstuctorStyle.IngredientField}  ml-15 mr-2`}
			key={0}>
			<ConstructorElement
				text={props.data[0].name + ' (верх)'}
				price={props.data[0].price}
				type="top"
				isLocked={true}
				thumbnail={props.data[0].image}
				key={0}
			/>
		</div>}
		<ul className={`${BurgerConstuctorStyle.AnotherScroller} custom-scroll`}
		>
			{useMemo(() => (props.data.map((element, index) => {

				if (element.type !== 'bun') {

					return (
						<OrderedIngredient key={element.dragId} index={index} item={element} moveCard={moveCard} />
					);

				}
			})))}
		</ul>
		{props.data[0].type === 'bun' && <div
			className={`${BurgerConstuctorStyle.IngredientField}  ml-15 mr-2`}
			key={props.data.length}>
			<ConstructorElement
				text={props.data[0].name + ' (низ)'}
				price={props.data[0].price}
				type="bottom"
				isLocked={true}
				thumbnail={props.data[0].image}
				key={props.data.length}
			/>
		</div>}
		<div

			className={`${BurgerConstuctorStyle.finalIngeredientdiv}  mt-10`}>
			<p className="text text_type_digits-medium mr-2">{finalPrice}</p>
			<CurrencyIcon />
			<div className=" ml-10">
				<Button type="primary" size="large" onClick={() => {

					const response = sendOrder(props.data, url)
					response.then((data) => {
						const order_number = data.order.number

						dispatch({ type: ORDER_NUMBER_REQUEST, order_number })
					})
					handleOpenModal();
				}}>
					Оформить заказ
				</Button>
			</div>
		</div>
		<>
			{data.order.isOpenModal && (
				<>
					<Modal title={""} onClose={handleCloseModal}>
						<OrderDetails orderNumber={data.order.orderNumber} />
					</Modal>
				</>
			)}
		</>
	</>
	);
}