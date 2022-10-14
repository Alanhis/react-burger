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
import { ConstructorContext } from '../../utils/constructor-context';
import { IngredientConstructor } from './ingredient-constuctor';
export default function BurgerConstuctor() {
	const ingredient = useContext(ConstructorContext);

	const [isOpen, setIsOpen] = React.useState(false);
	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};
	const ingredientfimal = IngredientConstructor()

	return (
		<div>
			<ul
				className={`${BurgerConstuctorStyle.IngredientList} ${BurgerConstuctorStyle.AnotherScroller} custom-scroll mt-25 `}>
				{ingredientfimal.map((element) => {

					if (ingredientfimal.indexOf(element) == 0) {
						return (
							<div
								className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}
								key={ingredientfimal.indexOf(element)}>
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

				<div
					className={`${BurgerConstuctorStyle.IngredientField} mb-2 ml-8 mr-2`}
					key={ingredientfimal[0]._id}>
					<ConstructorElement
						text={ingredientfimal[0].name}
						price={ingredientfimal[0].price}
						type="bottom"
						isLocked={true}
						thumbnail={ingredientfimal[0].image}
						key={ingredientfimal[0]._id}
					/>
				</div>

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
/* BurgerConstuctor.propTypes = {
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
 */