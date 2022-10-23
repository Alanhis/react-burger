import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import React, { useEffect } from 'react';
import BurgerIngredientsStyles from './burger-ingredients.module.css';
import Ingredients from '../ingredients/ingredients';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../../services/actions/ingredients';
export default function BurgerIngredients() {
	const [current, setCurrent] = React.useState('one');
	const handleIntersectionObserver = () => {
		let options = {
			root: null,

			threshold: 0.7
		}
		const targets = document.getElementById('scroller').querySelectorAll('section.food_type')
		const activeDiv = (target) => {
			const divObserver = new IntersectionObserver((entries, observer) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setCurrent(entry.target.getAttribute("id"))
					}

				})
			}, options)

			divObserver.observe(target)
		}
		targets.forEach(activeDiv)
	}
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchData())
		handleIntersectionObserver()
	}, [])
	const data = useSelector(store => store)


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
				<div id='scroller' className={`${BurgerIngredientsStyles.food} mt-10 custom-scroll`}>
					<section id="one"
						className={`${BurgerIngredientsStyles.fist_category} food_type`}>
						<p className=" text text_type_main-medium mb-6">
							Булки
						</p>
						<Ingredients
							ingredientType="bun"
							data={data.ingredients.ingredient} />
					</section>
					<section id="two"
						className={`${BurgerIngredientsStyles.second_category} food_type`}>
						<p id={'two'}
							className=" text text_type_main-medium mb-6">
							Соусы
						</p>
						<Ingredients ingredientType="sauce"
							data={data.ingredients.ingredient} />
					</section>
					<section id="three"
						className={`${BurgerIngredientsStyles.third_category} food_type`}>
						<p id={'three'}
							className=" text text_type_main-medium mb-6">
							Начинка
						</p>
						<Ingredients ingredientType="main"
							data={data.ingredients.ingredient} />
					</section>

				</div>
			</section>
		</>
	);
}
