import IngredientCard from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import IngredientsModule from '../ingredients/ingredients.module.css'
export default function Ingredients(props) {
	return (<div className={`${IngredientsModule.food_ingredients}  mt-6 mr-4 mb-10`}> {
		useMemo(() => (props.data.map((element) => {
			if (element.type == props.ingredientType) {
				return <IngredientCard data={element}
					key={element._id}
				/>;
			}
		})))
	} </div>
	);
}
Ingredients.propTypes = {
	data: PropTypes.array.isRequired,
};