import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { conductorReducer } from './conductor';
import { modalIngredientsReducer } from './modal-ingredient';
export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    conductor: conductorReducer,
    order: orderReducer,
    modalingredient: modalIngredientsReducer
});