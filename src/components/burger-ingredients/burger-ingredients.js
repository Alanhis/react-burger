import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useRef, useEffect } from 'react';
import BurgerIngredientsStyles from './burger-ingredients.module.css';

import PropTypes from 'prop-types';
import Ingredients from '../ingredients/ingredients';
import { useInView } from 'react-intersection-observer';

export default function BurgerIngredients(props) {
	const [current, setCurrent] = React.useState('one');
	return (
		<>
			<section className={`${BurgerIngredientsStyles.border} mr-10`}>
				<p className="text text_type_main-large mt-10 mb-5">Соберите бургер</p>
				<div className={`${BurgerIngredientsStyles.tab_panel}`}>
					<Tab value="one" active={current === 'one'} onClick={() => {

						setCurrent('one');

					}}>
						Булки
					</Tab>
					<Tab value="two" active={current === 'two'} onClick={() => {
						setCurrent('two');

					}}>
						Соусы
					</Tab>
					<Tab value="three" active={current === 'three'} onClick={() => {
						setCurrent('three');

					}}>
						Начинка
					</Tab>
				</div>
				<div className={`${BurgerIngredientsStyles.food} mt-10 custom-scroll`}>
					<p className="text text_type_main-medium mb-6">Булки</p>
					<Ingredients ingredientType="bun" data={props.ingredient} />
					<p className="text text_type_main-medium mb-6">Соусы</p>
					<Ingredients ingredientType="sauce" data={props.ingredient} />
					<p className="text text_type_main-medium mb-6">Начинка</p>
					<Ingredients ingredientType="main" data={props.ingredient} />
				</div>
			</section>
		</>
	);
}
BurgerIngredients.propTypes = {
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
