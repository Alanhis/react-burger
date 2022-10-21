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
import { MODAL_OPEN, MODAL_CLOSE, ORDER_NUMBER_REQUEST } from '../../services/actions/order';
export default function BurgerConstuctor() {
	const data = useSelector(store => store);

	const dispatch = useDispatch()
	const handleOpenModal = () => {
		dispatch({ type: MODAL_OPEN })
	};
	const handleCloseModal = () => {
		dispatch({ type: MODAL_CLOSE })
	};
	const ingredientfimal = IngredientConstructor(data.order.orderDetails)

	const finalPrice = useMemo(() => (ingredientfimal.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0) + ingredientfimal[0].price))
	return (
		<div className={`${BurgerConstuctorStyle.IngredientList}  mb-2  mt-25 `}>
			<div
				className={`${BurgerConstuctorStyle.IngredientField}  ml-15 mr-2`}
				key={0}>
				<ConstructorElement
					text={ingredientfimal[0].name + ' (верх)'}
					price={ingredientfimal[0].price}
					type="top"
					isLocked={true}
					thumbnail={ingredientfimal[0].image}
					key={0}
				/>
			</div>
			<ul className={`${BurgerConstuctorStyle.AnotherScroller} custom-scroll`}
			>
				{useMemo(() => (ingredientfimal.map((element, index) => {

					if (index != 0) {

						return (
							<div
								className={`${BurgerConstuctorStyle.IngredientField} mb-4  mr-2`}
								key={index}>
								<DragIcon type="secondary" />
								<ConstructorElement
									text={element.name}
									price={element.price}
									thumbnail={element.image}
									key={index}
								/>
							</div>
						);

					}
				})))}
			</ul>
			<div
				className={`${BurgerConstuctorStyle.IngredientField}  ml-15 mr-2`}
				key={ingredientfimal.length}>
				<ConstructorElement
					text={ingredientfimal[0].name + ' (низ)'}
					price={ingredientfimal[0].price}
					type="bottom"
					isLocked={true}
					thumbnail={ingredientfimal[0].image}
					key={ingredientfimal.length}
				/>
			</div>
			<div

				className={`${BurgerConstuctorStyle.finalIngeredientdiv}  mt-10`}>
				<p className="text text_type_digits-medium mr-2">{finalPrice}</p>
				<CurrencyIcon />
				<div className=" ml-10">
					<Button type="primary" size="large" onClick={() => {

						const response = sendOrder(ingredientfimal, url)
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
		</div>
	);
}
