import {
	ConstructorElement,
	CurrencyIcon,
	Button,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstuctorStyle from './butger-constructor.module.css';
import Modal from '../modal/modal';
import React, { useContext } from 'react';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
import { sendOrder } from '../../utils/post-logic';
import { IngredientConstructor } from './ingredient-constuctor';
import { url } from '../app/app'

export default function BurgerConstuctor() {

	const [orderNumber, setOrderNumber] = React.useState()
	const [isOpen, setIsOpen] = React.useState(false);
	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	const ingredientfimal = IngredientConstructor()

	const finalPrice = ingredientfimal.reduce((previousValue, currentValue) => previousValue + currentValue.price, 0) + ingredientfimal[0].price
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
				{ingredientfimal.map((element, index) => {

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
				})}



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
						handleOpenModal();
						const response = sendOrder(ingredientfimal, url)
						const data = response.then((data) => {
							const order_number = data.order.number
							setOrderNumber(order_number)

						})

					}}>
						Оформить заказ
					</Button>
				</div>
			</div>
			<>
				{isOpen && (
					<>
						<Modal title={""} onClose={handleCloseModal}>
							<OrderDetails orderNumber={orderNumber} />
						</Modal>
					</>
				)}
			</>
		</div>
	);
}
