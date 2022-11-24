import IngredientCard from '../ingredient-card/ingredient-card';
import PropTypes from 'prop-types';
import { useMemo } from 'react';
import IngredientsModule from '../ingredients/ingredients.module.css';
interface Props {
  ingredientType: string;
  data:
    | {
        calories: number;
        carbohydrates: number;
        fat: number;
        image: string;
        image_large: string;
        image_mobile: string;
        name: string;
        price: number;
        proteins: number;
        type: string;
        __v: number;
        _id: string;
      }[]
    | any;
}
export default function Ingredients({ ingredientType, data }: Props) {
  return (
    <div className={`${IngredientsModule.food_ingredients}  mt-6 mr-4 mb-10`}>
      {' '}
      {useMemo(
        () =>
          data.map(
            (element: {
              calories: number;
              carbohydrates: number;
              fat: number;
              image: string;
              image_large: string;
              image_mobile: string;
              name: string;
              price: number;
              proteins: number;
              type: string;
              __v: number;
              _id: string;
            }) => {
              if (element.type == ingredientType) {
                return <IngredientCard data={element} key={element._id} />;
              }
            }
          ),
        [data]
      )}{' '}
    </div>
  );
}
Ingredients.propTypes = {
  data: PropTypes.array.isRequired,
};
