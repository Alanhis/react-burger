import { ORDER_DATA_REQUEST, ORDER_DATA_SUCCESS, ORDER_DATA_FAILED, MODAL_OPEN, MODAL_CLOSE, ORDER_NUMBER_REQUEST, ORDER_NUMBER_DELETE } from "../actions/order";

const initialState = {
    isRequired: false,
    isRequiredError: false,
    orderNumber: 0,
    isOpenModal: false,
}

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_DATA_REQUEST: {
            return {
                ...state,
                isRequired: true
            }
        }
        case ORDER_DATA_SUCCESS: {

            return {
                ...state,
                ingredient: action.data.data,
                isRequired: false,
                isRequiredError: false
            }
        }
        case ORDER_DATA_FAILED: {
            return {
                ...state,
                isRequired: false,
                isRequiredError: true
            }
        }
        case MODAL_OPEN: {
            return {
                ...state,
                isOpenModal: true
            };
        }
        case MODAL_CLOSE: {
            return {
                ...state,
                isOpenModal: false
            };
        }
        case ORDER_NUMBER_REQUEST: {
            console.log(action)
            return {
                ...state,
                orderNumber: action.payload
            };
        }
        case ORDER_NUMBER_DELETE: {
            return {
                ...state,
                orderNumber: 0
            }
        }
        default: {
            return state;
        }
    }
}