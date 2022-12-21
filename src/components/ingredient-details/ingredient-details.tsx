import IngredientDetailStyle from './ingredient-details.module.css';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/store';
import { Iingredient } from '../../utils/types';
export default function IngredientDetails() {
  const { ingredientId } = useParams<{ ingredientId?: string }>();
  const data = useSelector(
    (data: RootState) => data
  ).ingredients.ingredient.filter(
    (data: Iingredient) => data._id === ingredientId
  );

  return (
    <div className={`${IngredientDetailStyle.IngredientPanel}`}>
      {data.length > 0 && (
        <>
          <img src={data[0].image_large} />
          <p className="text text_type_main-medium mt-4 mb-8">{data[0].name}</p>
          <div className={`${IngredientDetailStyle.IngredientDetail} mb-15`}>
            <div
              className={`${IngredientDetailStyle.IngredientDetailElement} mr-5 `}
            >
              <p className="text text_type_main-default text_color_inactive">
                Калории,ккал
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {data[0].calories}
              </p>
            </div>
            <div
              className={`${IngredientDetailStyle.IngredientDetailElement} mr-5`}
            >
              <p className="text text_type_main-default text_color_inactive">
                Белки, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {data[0].proteins}
              </p>
            </div>
            <div
              className={`${IngredientDetailStyle.IngredientDetailElement} mr-5`}
            >
              <p className="text text_type_main-default text_color_inactive">
                Жиры, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {data[0].fat}
              </p>
            </div>
            <div className={`${IngredientDetailStyle.IngredientDetailElement}`}>
              <p className="text text_type_main-default text_color_inactive">
                Углеводы, г
              </p>
              <p className="text text_type_main-default text_color_inactive">
                {data[0].carbohydrates}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}