import { INGREDIENT_MODAL_OPEN, INGREDIENT_MODAL_CLOSE, CLEAN_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from "../actions/modal-ingredient";

const initialState = {
    isModalIngredientOpen: false,
    selectredIngredient: [null]
}
export const modalIngredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case INGREDIENT_MODAL_OPEN: {
            return {
                ...state,
                isModalIngredientOpen: true
            };
        }
        case INGREDIENT_MODAL_CLOSE: {
            return {
                ...state,
                isModalIngredientOpen: false
            };
        }
        case SET_SELECTED_INGREDIENT: {
            return {
                ...state,
                selectredIngredient: action.usedData
            }
        }
        case CLEAN_SELECTED_INGREDIENT: {
            return {
                ...state,
                selectredIngredient: []
            }
        }
        default: {
            return state;
        }
    }
}