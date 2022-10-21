import { FETCH_DATA, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, INGREDIENT_MODAL_OPEN, INGREDIENT_MODAL_CLOSE, CLEAN_SELECTED_INGREDIENT, SET_SELECTED_INGREDIENT } from "../actions/ingredients";

const initialState = {
    ingredient: [],
    isRequired: false,
    isRequiredError: false,
    isModalIngredientOpen: false,
    selectredIngredient: []
}


export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA: {
            return {
                ...state,
                isRequired: true
            }
        }
        case FETCH_DATA_SUCCESS: {
            return {
                ...state,
                ingredient: action.data.data,
                isRequired: false,
                isRequiredError: false
            }
        }
        case FETCH_DATA_FAILED: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
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