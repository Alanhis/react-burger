import { CLEAN_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from "../actions/modal-ingredient";

const initialState = {
    selectredIngredient: null
}
export const modalIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_INGREDIENT: {
            return {
                ...state,
                selectredIngredient: action.usedData
            }
        }
        case CLEAN_SELECTED_INGREDIENT: {
            return {
                ...state,
                selectredIngredient: null
            }
        }
        default: {
            return state;
        }
    }
}