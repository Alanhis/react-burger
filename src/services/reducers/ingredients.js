import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILED, } from "../actions/ingredients";

const initialState = {
    ingredient: [],
    isRequired: false,
    isRequiredError: false,
}


export const ingredientsReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA_REQUEST: {
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
        default: {
            return state;
        }
    }
}