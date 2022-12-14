import IngredientDetailStyle from './ingredient-details.module.css';
import PropTypes from 'prop-types';
export default function IngredientDetails(props) {
	return (
		<div className={`${IngredientDetailStyle.IngredientPanel}`}>
			<img src={props.data.image_large} />
			<p className="text text_type_main-medium mt-4 mb-8">{props.data.name}</p>
			<div className={`${IngredientDetailStyle.IngredientDetail} mb-15`}>
				<div
					className={`${IngredientDetailStyle.IngredientDetailElement} mr-5 `}>
					<p className="text text_type_main-default text_color_inactive">
						Калории,ккал
					</p>
					<p className="text text_type_main-default text_color_inactive">
						{props.data.calories}
					</p>
				</div>
				<div
					className={`${IngredientDetailStyle.IngredientDetailElement} mr-5`}>
					<p className="text text_type_main-default text_color_inactive">
						Белки, г
					</p>
					<p className="text text_type_main-default text_color_inactive">
						{props.data.proteins}
					</p>
				</div>
				<div
					className={`${IngredientDetailStyle.IngredientDetailElement} mr-5`}>
					<p className="text text_type_main-default text_color_inactive">
						Жиры, г
					</p>
					<p className="text text_type_main-default text_color_inactive">
						{props.data.fat}
					</p>
				</div>
				<div className={`${IngredientDetailStyle.IngredientDetailElement}`}>
					<p className="text text_type_main-default text_color_inactive">
						Углеводы, г
					</p>
					<p className="text text_type_main-default text_color_inactive">
						{props.data.carbohydrates}
					</p>
				</div>
			</div>
		</div>
	);
}
IngredientDetails.propTypes = {
	data: PropTypes.objectOf(
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
		})
	).isRequired,
};
