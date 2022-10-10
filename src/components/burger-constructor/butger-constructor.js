import {
	ConstructorElement,
	CurrencyIcon,
	Button,
	DragIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import BurgerConstuctorStyle from './butger-constructor.module.css';
import Modal from '../modal/modal';
import React from 'react';
import OrderDetails from '../order-details/order-details';
import PropTypes from 'prop-types';
export default function BurgerConstuctor(props) {
	const [isOpen, setIsOpen] = React.useState(false);
	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	return (
		<div>
			<ul
				className={`${BurgerConstuctorStyle.IngredientList} ${BurgerConstuctorStyle.AnotherScroller} custom-scroll mt-25 `}>
				{props.ingredient.map((element) => {
					if (element._id == props.ingredient[0]._id) {
						return (
							<div
								className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}
								key={element._id}>
								<ConstructorElement
									text={element.name}
									price={element.price}
									type="top"
									isLocked={true}
									thumbnail={element.image}
									key={element._id}
								/>
							</div>
						);
					} else if (
						element._id == props.ingredient[props.ingredient.length - 1]._id
					) {
						return (
							<div
								className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}
								key={element._id}>
								<ConstructorElement
									text={element.name}
									price={element.price}
									type="bottom"
									isLocked={true}
									thumbnail={element.image}
									key={element._id}
								/>
							</div>
						);
					} else {
						return (
							<div
								className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-2 mr-2`}
								key={element._id}>
								<DragIcon type="secondary" />
								<ConstructorElement
									text={element.name}
									price={element.price}
									thumbnail={element.image}
									key={element._id}
								/>
							</div>
						);
					}
				})}
			</ul>
			<div
				style={{ display: 'inline-flex' }}
				className={`${BurgerConstuctorStyle.finalIngeredientdiv} `}>
				<p className="text text_type_digits-medium mr-2">610</p>
				<CurrencyIcon />
				<div className="ml-10">
					<Button type="primary" size="large" onClick={handleOpenModal}>
						Оформить заказ
					</Button>
				</div>
			</div>
			<>
				{isOpen && (
					<>
						<Modal isFood="false" onClose={handleCloseModal}>
							<OrderDetails orderNumber="111111" />
						</Modal>
					</>
				)}
			</>
		</div>
	);
}
BurgerConstuctor.propTypes = {
	ingredient: PropTypes.arrayOf(
		PropTypes.shape({
			calories: PropTypes.number,
			carbohydrates: PropTypes.number,
			fat: PropTypes.number,
			image: PropTypes.string,
			image_large: PropTypes.string,
			image_mobile: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number,
			proteins: PropTypes.number,
			type: PropTypes.string,
			__v: PropTypes.number,
			_id: PropTypes.string,
		})
	).isRequired,
};
