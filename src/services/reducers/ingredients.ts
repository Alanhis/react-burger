import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED, TIngredientActions} from "../actions/ingredients";

const initialState = {
    ingredient: [],
    isRequired: false,
    isRequiredError: false,
}


export const ingredientsReducer = (state = initialState, action: any | TIngredientActions) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case GET_DATA_SUCCESS: {
            
            return {
                ...state,
                ingredient: action.data,
                isRequired: false,
                isRequiredError: false
            }
        }
        case GET_DATA_FAILED: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        default: {
            return state;
        }
    }
}