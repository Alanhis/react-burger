import { combineReducers } from 'redux';
import { ingredientsReducer } from './ingredients';
import { orderReducer } from './order';
import { conductorReducer } from './conductor';
import { wsReducer } from './wsReduces';
import { authReducer } from './auth';
import { userReducer } from './user';
export const rootReducer = combineReducers({
    ingredients: ingredientsReducer,
    conductor: conductorReducer,
    order: orderReducer,
    feed:wsReducer,
    auth: authReducer,
    user: userReducer
});